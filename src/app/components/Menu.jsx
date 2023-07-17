const Menu = ({ icon, title, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 h-[120px] border border-gray-blue-95 cursor-pointer transition-all duration-300 text-gray-blue-80 hover:shadow-sm hover:text-blue hover:scale-125 hover:bg-white hover:rounded-2xl hover:border-none ${className}`}
    >
      {icon}
      <span className="text-xs font-bold">{title}</span>
    </div>
  );
};
export default Menu;
