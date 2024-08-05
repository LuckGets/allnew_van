import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="md:w-[80px] md:h-[80px] w-[144px] h-[144px] relative">
      <Link href="/">
        <Image fill alt="logo" src="/images/mixue.png" />
      </Link>
    </div>
  );
}
