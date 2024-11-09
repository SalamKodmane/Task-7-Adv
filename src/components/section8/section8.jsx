import Image from "next/image";

const Section8 = () => {
  const cardData8 = [
    {
      img: "/customer.png",
      name: "Lyod Gomez",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
    {
      img: "/customer.png",
      name: "Lyod Gomez",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
  ];
  return (
    <>
      <div className="section8 px-4 lg:px-18 pt-32">
        <h2 className="max-w-[450px] text-3xl text-my-gray font-bold pb-15 px-4 lg:px-0">
          The Most Popular Packages
        </h2>
        <div className="flex gap-5 lg:flex-row flex-col justify-center items-center px-4 lg:px-0">
          {cardData8.map((card, index) => {
            return (
              <div key={index} className=" lg:max-w-[700px] lg:h-[450px] max-w-[500px] border rounded-3xl">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={card.img}
                    width={80}
                    height={80}
                    alt="Customer Image"
                    className="pt-8"
                  />
                  <h4 className="pt-4 text-lg text-my-gray">{card.name}</h4>
                </div>
                <div className="pt-10 px-12 flex flex-col gap-2.5 ">
                  <Image
                    src="coma.svg"
                    width={40}
                    height={28}
                    alt="coma Image"
                  />
                  <p className="text-lg text-my-gray">{card.text}</p>
                  <div className="flex justify-end">
                    <Image
                      src="coma.svg"
                      width={40}
                      height={28}
                      alt="coma Image"
                      className="pb-7"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section8;
