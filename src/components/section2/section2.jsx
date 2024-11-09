import Image from "next/image";

const Section2 = () => {
  const cardsData2 = [
    {
      img: "/section2-1.png",
      title: "Lucca Bike Tour",
      paragraph: "from",
      span: "34 €",
      content1: "EVERY DAY",
      content2: "3-10 PP",
      text: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
      img: "/section2-2.png",
      title: "Wine tasting In Tuscany",
      paragraph: "from",
      span: "34 €",
      content1: "MONDAY",
      content2: "10-30 PP",
      text: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
      img: "/section2-3.png",
      title: "Cinque Terre Tour",
      paragraph: "from",
      span: "34 €",
      content1: "TO BE DECIDED",
      content2: "10-50 PP",
      text: "Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
      img: "/section2-4.png",
      title: "Siena and Surroundings",
      paragraph: "from",
      span: "34 €",
      content1: "TO BE DECIDED",
      content2: "5-10 PP",
      text: "Visit the beautiful Siena and the cities that surround it to experience ...",
    },
  ];
  return (
    <>
      <div className="section2 px-4 lg:px-18 pt-32">
        <h2 className="max-w-[571px] text-3xl text-my-gray font-bold">
          Explore Our Popular Destinantions
        </h2>
        <div className="flex gap-8 pt-15 justify-center items-center lg:flex-row flex-col">
          {cardsData2.map((card, index) => {
            return (
              <div key={index} className="lg:max-w-[330px] lg:h-[592px] max-w-[310px]">
                <Image
                  src={card.img}
                  width={330}
                  height={404}
                  alt="section2 Image"
                  className="h-[404px]"
                />
                <h4 className="pt-4 text-2xl text-my-gray font-bold">
                  {card.title}
                </h4>
                <div className="flex gap-2.5 pt-4">
                  <p className="text-my-gray text-lg">{card.paragraph}</p>
                  <span className="text-2xl text-primary-color font-bold">
                    {card.span}
                  </span>
                </div>
                <div className="flex gap-32">
                  <p className="text-primary-color text-base">{card.content1}</p>
                  <p className="text-primary-color text-base">{card.content2}</p>
                </div>
                <p className="pt-3">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section2;
