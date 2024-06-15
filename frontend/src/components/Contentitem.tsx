import Link from 'next/link';

type ContentItemProps = {
  id: string;
  title: string;
};

const ContentItem: React.FC<ContentItemProps> = ({ id, title }) => {
  return (
    <li className="my-2">
      <Link legacyBehavior href={`/content/${id}`}>
        <a className="text-blue-500 hover:underline">{title}</a>
      </Link>
    </li>
  );
};

export default ContentItem;
