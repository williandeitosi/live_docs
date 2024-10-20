import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1 flex">
        <Image
          src="/assets/images/logo.png"
          alt="Logo with name"
          width={80}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={45}
          height={32}
          className="mr-2 md:hidden"
        />
        <h1 className="text-black flex items-center justify-center	">
          Live Docs
        </h1>
      </Link>
      {children}
    </div>
  );
};

export default Header;
