import PricingCard from '@/components/pricing-card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Check, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './assets/logo.svg';
import womanImg from './assets/woman.svg';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-2 md:px-0">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} alt="Logotipo" width={191} height={40} priority />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={24} className="md:hidden cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/#funcionamento">Operational</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#preco">Price</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="items-center gap-1 hidden md:flex ">
            <Link href="#funcionamento">
              <Button className="text-primary" variant={'link'}>
                Operational
              </Button>
            </Link>
            <Link href="#preco">
              <Button className="text-primary" variant={'link'}>
                Price
              </Button>
            </Link>
            {session && (
              <Link href="/dashboard">
                <Button className="text-primary" variant={'bg-white'}>
                  Dashboard
                </Button>
              </Link>
            )}
            {!session && (
              <Link href="/login">
                <Button className="text-primary" variant={'bg-white'}>
                  Login
                </Button>
              </Link>
            )}
          </div>
        </nav>
        <h1 className="text-primary md:text-6xl text-2xl font-bold mt-8 md:mt-16">
          Simplify Your Studies{' '}
        </h1>
        <p className="text-primary mt-4 text-sm md:text-xl max-w-3xl mx-auto">
        Let us curate it for you. Subscribe to our platform and get a new programming ebook every month.
        </p>
        <form className="md:mt-16 mt-10">
          <div className="flex gap-2 justify-center">
            <Input
              placeholder="Enter your email"
              type="text"
              className="max-w-sm border-primary border border-opacity-80 placeholder:text-primary placeholder:opacity-60"
            />
            <Button>Subscribe now</Button>
          </div>
          <p className="text-primary-800 text-xs text-muted-foreground mt-2">
          Start your subscription now. Cancel anytime.{' '}
          </p>
        </form>
      </section>
      <section className="bg-white md:py-16 py-8" id="funcionamento">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            How does it work?
          </h2>
          <div className="mx-24 xl:mx-80 flex flex-col md:flex-row items-center justify-between">
            <Image
              src={womanImg}
              alt="Mulher carregando caixas"
              width={392}
              height={392}
              className="max-w-xs"
            />
            <ul className="md:text-2xl text-lg text-muted-foreground space-y-4 md:space-y-6 flex-shrink-0">
              <li className="flex items-center justify-between gap-4">
              Access to 1 ebook per month{' '}
                <Check size={24} className="text-green-600" />
              </li>
              <li className="flex items-center justify-between gap-4">
              Curated selection
                <Check size={24} className="text-green-600" />
              </li>
              <li className="flex items-center justify-between gap-4">
                Cancel anytime
                <Check size={24} className="text-green-600" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:py-16 py-8 text-center px-2" id="preco">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
        Level up your skills to grow smarter
        </h2>
        <p className="text-primary mt-4 text-sm md:text-xl max-w-3xl mx-auto">
        Why have countless plans when we know exactly what’s best for you? Subscribe to our Pro Premium VIP monthly plan and get a new programming ebook every month. All for less than a coffee a day.
        </p>

        <div className="flex justify-center">
          <PricingCard />
        </div>
      </section>
      <section className="bg-white md:py-16 py-10 text-center">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
        Don’t miss out, join now!
        </h2>
        <p className="text-primary mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos{' '}
        </p>
        <Button className="mt-14 w-96">Subscribe now</Button>
        <p className="text-xs text-muted-foreground mt-2">
        Do like thousands of other people. Subscribe to our product and have your studies guaranteed.{' '}
        </p>
        <footer className="mt-16 border-t border-gray-300 pt-10">
          <Image
            src={logo}
            alt="Logotipo"
            width={191}
            height={40}
            className="mx-auto"
          />
          <p className="text-muted-foreground">
            © 2024 SaasBook. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}