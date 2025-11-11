import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import bookImg from './book.png';

export default async function MonthlyBook() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Book of the Month</h1>
      <Image src={bookImg} alt="Livro do mês" />
      <Link
        className={cn(
          'flex items-center justify-center gap-4 mt-10',
          buttonVariants()
        )}
        href="/livro.pdf"
        target="_blank"
      >
        <Download className="h-4 w-4" /> Download Pdf
      </Link>
    </>
  );
}
