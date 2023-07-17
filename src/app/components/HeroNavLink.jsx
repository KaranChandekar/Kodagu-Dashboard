import Link from "next/link";

const HeroNavLink = ({ icon, title, active }) => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 pb-6 ${
        active ? "border-b-4 border-blue" : ""
      }`}
    >
      {icon}
      <span
        className={` text-xs font-bold mr-5 ${
          active ? "text-blue" : "text-gray-blue-70"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};
export default HeroNavLink;
