import ContentList from "@/components/ContentList";
import Background from "@/components/Background";
import Header from '@/components/Header';
import SearchBar from "@/components/SearchBar";

export default function Home() {

  return (
    <main className="">
      <Background />
      <Header title="Verso vivo" />

      <SearchBar placeholder="Pesquisar..."/> 

      <ContentList />
      
    </main>
  );
}