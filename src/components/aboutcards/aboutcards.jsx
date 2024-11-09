import Image from "next/image";

const AboutCards = () => {
  const datacards = [
    {
      img: "/map.svg",
      title: "Complete Packages For All Your Wishes",
    },
    {
      img: "/experience.svg",
      title: "Over 30 Years Of Experience",
    },
    {
      img: "/guide.svg",
      title: "Expert Guides For You",
    },
    {
      img: "/price.svg",
      title: "Guaranteed fun at the best price!",
    },
  ];
  return (
    <>
      <div className="relative ">
        <Image
          src="/background4.png"
          width={1920}
          height={450}
          alt="Background Image"
          className="lg:w-full mt-53 bg-cover h-screen"
        />
        <div className=" px-4 lg:px-18 flex gap-3 lg:gap-20 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:flex-row flex-col">
          {datacards.map((card, index) => {
            return (
              <div
                key={index}
                className="bg-[#ffffff43] max-w-[292.5px] lg:h-[189px] h-[170px] flex flex-col items-center text-center rounded-3xl"
              >
                <Image
                  src={card.img}
                  width={60}
                  height={60}
                  alt="About icons"
                  className="pt-8 pb-4"
                />
                <h3 className="w-[232px] px-8 text-lg font-bold">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutCards;
