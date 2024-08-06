import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="aspect-video md:w-[80px] md:h-[80px] w-[500px] h-[120px] relative ">
      <Link href="/">
        <Image fill alt="logo" src="/images/logo-transparent.png" />
      </Link>
    </div>
  );
}
