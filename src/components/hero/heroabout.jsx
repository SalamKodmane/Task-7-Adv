import Image from "next/image";

const HeroAbout = () => {
  return (
    <>
      <div className="hero h-screen relative z-10">
        <Image
          src="/HeroAbout.png"
          width={1920}
          height={1020}
          alt="Hero Image"
          className="w-full h-screen"
        />
        <div className="absolute top-1/2 left-1/2 text-center px-4 lg:px-18 max-w-[1300px] text-white -translate-y-1/2 -translate-x-1/2 mt-22 lg:mt-20">
          <h1 className="lg:text-4xl text-3xl mb-6 font-bold">
            Our team cares about your full relax
          </h1>
          <p className="lg:text-2xl text-lg  mt-4 mb-6 ">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </p>
          <button className="w-72 h-14 rounded-full border text-white hover:bg-primary-color ">
            View our Tour Packages
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
