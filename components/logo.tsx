import logoSvg from '@/src/app/assets/logo.svg';
import Image from 'next/image';

export default function Logo() {
  return (
    <Image src={logoSvg} alt="Logotipo" width={191} height={40} priority />
  );
}
