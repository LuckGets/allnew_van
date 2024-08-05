import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center gap-10">
      <Link href="/">Home</Link>
      <Link href="/">Recommended place</Link>
      <Link href="/">VIP van service</Link>
      <Link href="/">Contact us</Link>
    </div>
  );
}
