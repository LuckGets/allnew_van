import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex">
      <Link href="/">
        <Image height={100} width={50} alt="logo" src="/images/mixue.png" />
      </Link>
    </div>
  );
}
