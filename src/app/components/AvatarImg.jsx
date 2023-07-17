import Image from "next/image";

const AvatarImg = ({ image, color, className }) => {
  return (
    <Image src={image} className={`rounded-full cursor-pointer ${color} ${className}`} />
  );
};
export default AvatarImg;
