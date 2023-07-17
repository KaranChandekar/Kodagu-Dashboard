const IconBtn = ({ icon, className }) => {
  return (
    <div
      className={`w-[50px] h-[50px] bg-white rounded-full shadow-sm flex items-center justify-center cursor-pointer ${className}`}
    >
      {icon}
    </div>
  );
};
export default IconBtn;
