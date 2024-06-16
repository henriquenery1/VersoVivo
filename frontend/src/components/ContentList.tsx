"use client";

import { useEffect, useState } from 'react';
import ContentItem from './Contentitem';
import { fetchContents, Content } from '../utils/fetchContent';

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
      <div className='flex flex-col items-center justify-center'>
        <ContentItem id='' title='loading' />
      </div>
    );
  }

  return (
    <div className='overflow-y-auto max-h-96'>
      <ul className='flex flex-col items-center justify-center'>
        {contents.map((content) => (
          <ContentItem key={content.id} id={content.id} title={content.title} />
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
