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
      resolve(generateRandomContent(10));
    });
  };
  