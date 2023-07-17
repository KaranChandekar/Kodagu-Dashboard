import Link from "next/link";
import ChromeReaderMode from "../svg/Action/ChromeReaderMode";
import Mail from "../svg/Content/Mail";
import LocalPhone from "../svg/Maps/LocalPhone";
import IcTelegram from "../svg/Social/IcTelegram";
import IcWhatsapp from "../svg/Social/IcWhatsapp";

const SidebarBase = () => {
  return (
    <div className="rounded-[30px] border-2 border-gray-blue-95 py-3 flex gap-3 items-center justify-center">
      <Link href="/">
        <LocalPhone />
      </Link>
      <Link href="/">
        <Mail />
      </Link>
      <Link href="/">
        <ChromeReaderMode />
      </Link>
      <Link href="/">
        <IcTelegram />
      </Link>
      <Link href="/">
        <IcWhatsapp />
      </Link>
    </div>
  );
};
export default SidebarBase;
