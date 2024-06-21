import ShowContent from "@/components/ShowContent";
import TextNavigation from "@/components/TextNavigation";

interface Props {
  params: { id: string };
}

export default function ContentDetails({ params }: Props) {
  return (
    <main className="bg-image-bg h-screen">
      <ShowContent id={params.id} />

      <TextNavigation paginate="/" title="Voltar" />
    </main>
  );
}
