import ContentList from "@/components/ContentList";
import Header from '@/components/Header';
import SearchBar from "@/components/SearchBar";
import CreateContentButton from "@/components/CreateContentButton";
import TextNavigation from "@/components/TextNavigation";

export default function Home() {

  return (
    <main className="bg-image-bg h-screen">
      <Header title="Verso vivo" />

      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-between mb-10">
          <SearchBar placeholder="Pesquisar..." />

          <CreateContentButton />
        </div>
      </div>

      <ContentList />

      <TextNavigation paginate="/create-content" title="Criar" />

    </main>
  );
}