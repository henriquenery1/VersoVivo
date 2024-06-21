"use client"

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Content, fetchContents } from "@/utils/fetchContent";

interface Props {
  id: string;
}

const ShowContent: React.FC<Props> = ({ id }) => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchContents();
      const content = data.find((item) => item.id === id) || null;
      setContent(content);
    };

    loadContent();
  }, [id]);

  if (!content) {
    return (
      <main className="h-screen flex items-center justify-center">
        <Header title="Carregando..." />
      </main>
    );
  }

  return (
    <>
      <Header title={content.title} />

      <div className="relative p-10 w-2/4 mx-auto shadow-lg bg-stormy-grey bg-opacity-90 rounded-3xl overflow-auto max-h-[38rem] custom-scrollbar">
        <article className="text-3xl text-content-pen leading-10 font-medium whitespace-pre-line">
          {content.body}
        </article>
      </div>
    </>
  );
};

export default ShowContent;
