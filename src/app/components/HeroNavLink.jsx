import Link from "next/link";

const HeroNavLink = ({ icon, title }) => {
  return (
    <Link href="/" className="flex items-center gap-2 pb-6">
      {icon}
      <span className="text-gray-blue-70 text-xs font-bold mr-5">{title}</span>
    </Link>
  );
};
export default HeroNavLink;
