
import ContentList from "@/components/ContentList";
import Background from "../components/Background";
import Header from '../components/Header';

export default function Home() {

  return (
    <main className="">
      <Background />

      <Header title="Verso vivo" />

      <ContentList />
      
    </main>
  );
}