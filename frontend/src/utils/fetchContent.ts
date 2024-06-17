export interface Content {
  id: string;
  title: string;
  body: string
}

export const fetchContents = async (): Promise<Content[]> => {
  const generateRandomContent = (num: number): Content[] => {
    const contents: Content[] = [];
    for (let i = 1; i <= num; i++) {
      contents.push({
        id: i.toString(),
        title: `Publicação Aleatória ${i}`,
        body: `
            1 Vós, filhos, sede obedientes a vossos pais no Senhor, porque isto é justo.
2 Honra a teu pai e a tua mãe, que é o primeiro mandamento com promessa;
3 Para que te vá bem, e vivas muito tempo sobre a terra.
4 E vós, pais, não provoqueis à ira a vossos filhos, mas criai-os na doutrina e admoestação do Senhor.
5 Vós, servos, obedecei a vossos senhores segundo a carne, com temor e tremor, na sinceridade de vosso coração, como a Cristo;
6 Não servindo à vista, como para agradar aos homens, mas como servos de Cristo, fazendo de coração a vontade de Deus;
7 Servindo de boa vontade como ao Senhor, e não como aos homens.
8 Sabendo que cada um receberá do Senhor todo o bem que fizer, seja servo, seja livre.
9 E vós, senhores, fazei o mesmo para com eles, deixando as ameaças, sabendo também que o Senhor deles e vosso está no céu, e que para com ele não há acepção de pessoas.
10 No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.
11 Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo.
12 Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais.
13 Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau e, havendo feito tudo, ficar firmes.
14 Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade, e vestida a couraça da justiça;
15 E calçados os pés na preparação do evangelho da paz;
16 Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno.
17 Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus;
18 Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança e súplica por todos os santos,
19 E por mim; para que me seja dada, no abrir da minha boca, a palavra com confiança, para fazer notório o mistério do evangelho,
20 Pelo qual sou embaixador em cadeias; para que possa falar dele livremente, como me convém falar.
21 Ora, para que vós também possais saber dos meus negócios, e o que eu faço, Tíquico, irmão amado, e fiel ministro do Senhor, vos informará de tudo.
22 O qual vos enviei para o mesmo fim, para que saibais do nosso estado, e ele console os vossos corações.
23 Paz seja com os irmãos, e amor com fé da parte de Deus Pai e da do Senhor Jesus Cristo.
24 A graça seja com todos os que amam a nosso Senhor Jesus Cristo em sinceridade. Amém.
            `
      });
    }
    return contents;
  };

  return new Promise((resolve) => {
    resolve(generateRandomContent(10));
  });
};
