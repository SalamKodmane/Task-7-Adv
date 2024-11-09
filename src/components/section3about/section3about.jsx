import Image from "next/image";

const Section3About = () => {
  return (
    <>
      <div className="section3 px-4 lg:px-18 flex flex-col lg:flex-row lg:gap-x-18 ">
        <Image
          src="/about-section.png"
          width={600}
          height={516}
          alt="About Image"
          className="mt-8 lg:mt-32 mb-5 lg:mb-0 w-full sm:w-3/4 md:w-1/2 lg:w-auto"
        />

        <div className="max-w-full md:max-w-[700px] mt-8 lg:mt-63 lg:ml-10">
          <div>
            <p className="text-base text-my-gray mb-4 lg:mb-1.5">
              WELCOME TO OUR SITE!
            </p>
            <h2 className="text-2xl md:text-3xl text-my-gray mb-4 lg:mb-8 font-bold">
              We Are The Center Of Lucca To Offer You The Best
            </h2>
            <p className="text-sm md:text-lg text-my-gray mb-4 lg:mb-8">
              We are right in the center of Lucca to offer you the real city
              life! With years of experience in practically every tourism
              sector, with us you can find complete packages at the lowest
              price, to travel and learn and have fun all without worries and
              without stress. What are you waiting for, book a bright evening, a
              trip to beautiful Tuscany or a personal tour for you!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 lg:gap-13 mt-8 lg:mt-12">
            <div>
              <h3 className="text-xl md:text-3xl text-primary-color font-bold mb-1.5">
                20+
              </h3>
              <p className="text-my-gray text-sm md:text-base">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl text-primary-color font-bold mb-1.5">
                100+
              </h3>
              <p className="text-my-gray text-sm md:text-base">
                Happy Customer
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl text-primary-color font-bold mb-1.5">
                15+
              </h3>
              <p className="text-my-gray text-sm md:text-base">
                Choice of Services
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl text-primary-color font-bold mb-1.5">
                10+
              </h3>
              <p className="text-my-gray text-sm md:text-base">
                Professional Guides
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3About;
