import Link from 'next/link';
import Image from 'next/image';
import addIcon from '../../public/btn_add_content.svg';

const CreateContentButton: React.FC = () => {
  return (
    <Link legacyBehavior href="/create-content">
      <a className="flex items-center justify-center bg-transparent ml-5">
        <Image src={addIcon} alt="Create Content" width={70} height={70} />
      </a>
    </Link>
  );
};

export default CreateContentButton;
