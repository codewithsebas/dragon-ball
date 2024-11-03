import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
  title: string;
  link: string;
}

const BackButton = ({title, link}: BackButtonProps) => {

  return (
    <Link
      href={link}
      className="w-fit text-white border p-1 px-3 rounded-md cursor-pointer flex items-center gap-3 duration-200 hover:bg-white/10"
    >
      <IoArrowBack />
      {title}
    </Link>
  );
};

export default BackButton;
