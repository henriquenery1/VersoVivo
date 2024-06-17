import ContentList from "@/components/ContentList";
import Background from "@/components/Background";
import Header from '@/components/Header';
import SearchBar from "@/components/SearchBar";
import CreateContentButton from "@/components/CreateContentButton";

export default function Home() {

  return (
    <main className="">
      <Background />

      <Header title="Verso vivo" />

      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center justify-between mb-10">
          <SearchBar placeholder="Pesquisar..." />

          <CreateContentButton />
        </div>
      </div>



      <ContentList />

    </main>
  );
}