import Image from "next/image";

const AvatarImg = ({ image, color }) => {
  return (
    <Image src={image} className={`rounded-full cursor-pointer ${color}`} />
  );
};
export default AvatarImg;
