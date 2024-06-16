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
  
  if (!contents) return <p>Loading...</p>;

  return (
    <ul>
      {contents.map((content) => (
        <ContentItem key={content.id} id={content.id} title={content.title} />
      ))}
    </ul>
  );
};

export default ContentList;
