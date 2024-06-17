"use client"

import Background from "@/components/Background";
import Header from "@/components/Header";
import ShowContent from "@/components/ShowContent";
import { Content, fetchContents } from "@/utils/fetchContent";
import { useState, useEffect } from "react";

interface Props {
  params: { id: string };
}

export default function ContentDetails({ params }: Props) {
  const [contents, setContents] = useState<Content[] | null>(null);

  useEffect(() => {
    const loadContents = async () => {
      const data = await fetchContents();
      setContents(data);
    };
    loadContents();
  }, []);

  useEffect(() => {
    const loadContents = async () => {
      const data = await fetchContents();
      const filteredContents = data.filter(
        (content) => content.id === params.id
      );
      setContents(filteredContents);
    };
    loadContents();
  }, [params.id]);

  if (!contents || contents.length === 0) {
    return (
      <>
        <Background />
        <Header title='Nada por aqui...' />
      </>
    );
  }

  const content = contents[0];

  return (
    <>
      <Background />

      <Header title={content.title} />

      <ShowContent body={content.body} />

    </>
  );
}
