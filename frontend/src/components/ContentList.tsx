"use client";

import { useEffect, useState } from 'react';
import ContentItem from './ContentItem';
import { fetchContents, Content } from '@/utils/fetchContent';

const ContentList: React.FC = () => {
  const [contents, setContents] = useState<Content[] | null>(null);

  useEffect(() => {
    const loadContents = async () => {
      const data = await fetchContents();
      setContents(data);
    };
    loadContents();
  }, []);

  if (!contents) {
    return (
      <ul className='flex flex-col items-center justify-center relative'>
        <div className='bg-stormy-grey bg-opacity-60 rounded-full shadow-lg p-4 w-[45rem] text-center'>
          <p className='text-4xl font-bold'>Loading...</p>
        </div>
      </ul>
    );
  }

  return (
      <div className='overflow-y-auto max-h-[29rem] relative p-4 custom-scrollbar max-w-[48rem] mx-auto'>
        <ul className='flex flex-col items-center justify-center'>
          {contents.map((content) => (
            <ContentItem key={content.id} id={content.id} title={content.title} body={''} />
          ))}
        </ul>
    </div>
  );
};

export default ContentList;
