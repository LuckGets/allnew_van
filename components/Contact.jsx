import { LineIcon, PhoneIcon, WhatsappIcon } from "@/icons/Icon";

export default function Contact() {
  return (
    <div className="flex justify-between items-center md:min-w-[100px]">
      <LineIcon />
      <PhoneIcon />
      <WhatsappIcon />
    </div>
  );
}
