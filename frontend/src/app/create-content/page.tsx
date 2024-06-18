import Background from "@/components/Background";
import Header from '@/components/Header';
import AddContent from "@/components/AddContent";
import TextNavigation from "@/components/TextNavigation";


export default function CreateContent() {

  return (
    <main className="">
      <Background />

      <Header title="Espaço de criação" />

      <AddContent />

      <TextNavigation title="Voltar" />

    </main>
  );
}