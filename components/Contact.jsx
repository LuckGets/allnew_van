import { LineIcon, PhoneIcon, WhatsappIcon } from "@/icons/Icon";
import Link from "next/link";
import { contactLink } from "@/constants";

export default function Contact() {
  return (
    <div className="flex flex-col justify-between gap-5 md:min-w-[100px]">
      <Link href={contactLink[0].resource} className="flex items-center gap-3">
        <IconLink>
          <PhoneIcon />
        </IconLink>
        <p>CALL US</p>
      </Link>
      <Link href={contactLink[1].resource} className="flex items-center gap-3">
        <IconLink>
          <LineIcon />
        </IconLink>
        <p>Add LINE ID</p>
      </Link>
      <Link href={contactLink[1].resource} className="flex items-center gap-3">
        <IconLink>
          <WhatsappIcon />
        </IconLink>
        <p>WHATS APPS</p>
      </Link>
    </div>
  );
}

const IconLink = ({ children }) => {
  return <div className="w-12">{children}</div>;
};
