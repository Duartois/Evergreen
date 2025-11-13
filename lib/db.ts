import { createClient } from '@libsql/client';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const createPrismaClient = () => {
  const tursoUrl = process.env.TURSO_DATABASE_URL;
  const datasourceUrl = process.env.DATABASE_URL ?? 'file:./prisma/dev.db';

  if (tursoUrl) {
    const client = createClient({
      url: tursoUrl,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
    const adapter = new PrismaLibSQL(client);

    return new PrismaClient({
      adapter,
    });
  }

  return new PrismaClient({
    datasourceUrl,
  });
};

const db = globalThis.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export default db;
