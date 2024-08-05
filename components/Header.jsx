import { LineIcon, PhoneIcon, WhatsappIcon } from "@/icons/Icon";
import Logo from "./Logo";
import Nav from "./Nav";
import Contact from "./Contact";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center gap-10 pt-2 md:p-8">
        <div>
          <Logo />
        </div>

        <div className="md:block hidden">
          <Nav />
        </div>

        <div className="md:hidden block pr-5">
          <MobileNav />
        </div>
        <div className="md:block hidden">
          <Contact />
        </div>
      </div>
    </header>
  );
}
