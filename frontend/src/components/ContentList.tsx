"use client";

import { useEffect, useState } from 'react';
import ContentItem from './Contentitem';

export interface Content {
  id: string;
  title: string;
}

export const fetchContents = async (): Promise<Content[]> => {
  const generateRandomContent = (num: number): Content[] => {
    const contents: Content[] = [];
    for (let i = 1; i <= num; i++) {
      contents.push({
        id: i.toString(),
        title: `Publicação Aleatória ${i}`,
      });
    }
    return contents;
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateRandomContent(10));
    }, 1000);
  });
};

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
