"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setactiveTab] = useState(0);
  const tabs = [
    {
      icon: "/world.svg",
      title: "Public Tours",
    },
    {
      icon: "/people.svg",
      title: "Private Tours",
    },
  ];

  // const contents = [
  //   {
  //     icon: "/people-solid.svg",
  //     title: "Number of people",
  //     description: "Choose number",
  //   },
  //   {
  //     icon: "/calendar.svg",
  //     title: "Date",
  //     description: "Choose Date",
  //   },
  //   {
  //     icon: "/clock.svg",
  //     title: "Time",
  //     description: "Choose Time",
  //   },
  //   {
  //     icon: "/tour.svg",
  //     title: "Tour",
  //     description: "Select Tour",
  //   },
  //   {
  //     icon: "/car.svg",
  //     title: "Transportation",
  //     description: "Select Transportation",
  //   },
  // ];
  
  return (
    <>
      <div className="hero h-screen relative z-10">
        <Image src="/hero.png" width={1920} height={1020} alt="Hero Image" className="w-full h-screen" />
        <div className="absolute top-1/2 left-1/2 text-center px-4 lg:px-18 max-w-[800px] text-white -translate-y-1/2 -translate-x-1/2">
          <h1 className="lg:text-6xl text-3xl mb-4">Enjoy in the best way!</h1>
          <p className="lg:text-2xl text-lg mt-4 mb-15">Enjoy our services for your trip anytime</p>
        </div>


        {/* <div className="max-w-[1383px] h-52 rounded-xl relative z-40 bg-[aqua]">
        <div className="flex gap-3 justify-center items-center">
          {tabs.map((tab, index) => (
            <button
              key={`tab_${index}`}
              className={`flex px-2 border hover:bg-slate-400 ${
                activeTab === index ? "bg-red-500 text-white" : ""
              }`}
            >
              <Image src={tab.icon} width={24} height={24} alt="tab icon" />
              {tab.title}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          {contents &&
            contents.map((content, index) => (
              <div key={`content_${index}`} className="flex items-center">
                <div className="flex justify-between items-center">
                  <Image
                    src={content.icon}
                    width={24}
                    height={24}
                    alt="tab icon"
                  />
                  <div>
                    <p>{content.title}</p>
                    <p>{content.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Hero;
