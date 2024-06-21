import Background from "@/components/Background";
import Header from '@/components/Header';
import AddContent from "@/components/AddContent";
import TextNavigation from "@/components/TextNavigation";


export default function CreateContent() {

  return (
    <main className="bg-image-bg h-screen">
      <Header title="Espaço de criação" />

      <AddContent />

      <TextNavigation paginate="/" title="Voltar" />

    </main>
  );
}