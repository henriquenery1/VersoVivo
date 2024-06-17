import { Content } from '../utils/fetchContent';
import Link from 'next/link';


const ContentItem: React.FC<Content> = ({ id, title }) => {
  return (
    <li className="my-4">
      <Link href={`/content/${id}`}>
      <div className='bg-[#7B7B82] bg-opacity-60 hover:bg-gray-800 transition-all duration-200 ease-in-out rounded-full shadow-lg p-4 w-[45rem] text-center'>
        <h2 className='text-4xl font-normal'>{title}</h2>
      </div>
      </Link>
    </li>
  );
};

export default ContentItem;
