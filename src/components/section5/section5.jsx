import Image from "next/image";

const Section5 = () => {
  const cardsData5 = [
    {
      img: "/section5-1.png",
      title: "Bike and rickshaw rental",
      paragraph: "Book your quality vehicle quickly for an hour or all day!",
    },
    {
      img: "/section5-2.png",
      title: "Guided tour of the countryside",
      paragraph:
        "Live the real Lucchese experience by visiting the suburbs by bike!",
    },
    {
      img: "/section5-3.png",
      title: "Taxi and NCC service",
      paragraph:
        "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
    {
      img: "/section5-4.png",
      title: "Bus Package",
      paragraph:
        "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
  ];
  return (
    <>
      <div className="px-4 lg:px-18 pt-32">
        <div className="flex gap-8 justify-center items-center lg:flex-row flex-col">
          {cardsData5.map((card, index) => {
            return (
              <div key={index} className="lg:max-w-[330px] lg:h-[476px] max-w-[310px]">
                <Image
                  src={card.img}
                  width={330}
                  height={302}
                  alt="section5 Image"
                  className="h-[302px] "
                />
                <h4 className="pt-5 text-2xl text-my-gray font-bold">{card.title}</h4>
                <p className="pt-3 text-my-gray">{card.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section5;
