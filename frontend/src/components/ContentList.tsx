"use client";

import { useEffect, useState } from 'react';
import ContentItem from './Contentitem';
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
      <ul className='flex flex-col items-center justify-center relative z-10'>
      <div className='bg-[rgb(123,123,130)] bg-opacity-60 rounded-full shadow-lg p-4 w-[45rem] text-center'>
        <p className='text-4xl font-bold'>Loading...</p>
      </div>
      </ul>
    );
  }

  return (
    <div className='overflow-y-auto max-h-[26rem] relative z-10 p-4'>
      <ul className='flex flex-col items-center justify-center'>
        {contents.map((content) => (
          <ContentItem key={content.id} id={content.id} title={content.title} />
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
