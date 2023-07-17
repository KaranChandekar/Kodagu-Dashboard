import Link from "next/link";
import MoreHoriz from "../svg/Navigation/MoreHoriz";

const Navbar = () => {
  return (
    <nav className="text-xs font-bold text-gray-blue-70 flex items-center justify-center gap-6">
      <Link href="/">Dashboard</Link>
      <Link href="/">About Us</Link>
      <Link href="/">News</Link>
      <Link href="/">User Policy</Link>
      <Link href="/">Contact</Link>
      <Link href="/">
        <MoreHoriz />
      </Link>
    </nav>
  );
};
export default Navbar;
