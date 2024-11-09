import Image from "next/image";

const Section3 = () => {
  return (
    <>
 <div className="section3 px-4 lg:px-18 flex flex-col lg:flex-row lg:gap-x-52">
        <Image
          src="/aboutPicture.png"
          width={450}
          height={650}
          alt="About Image"
          className="mt-8 lg:mt-32 mb-5 lg:mb-0 w-full sm:w-3/4 md:w-1/2 lg:w-auto"
        />
        
        <div className="max-w-full md:max-w-[700px] mt-8 lg:mt-63 lg:ml-10">
          <div>
            <p className="text-base text-my-gray mb-4 lg:mb-1.5">
              WELCOME TO OUR SITE!
            </p>
            <h2 className="text-2xl md:text-3xl text-my-gray mb-4 lg:mb-8 font-bold">
              We are the best company for your visit
            </h2>
            <p className="text-sm md:text-lg text-my-gray mb-4 lg:mb-8">
              After decades of experience, and a whole life in Lucca, we offer
              you the most complete tourism service in the city. In addition to
              having bikes and rickshaws to have as much fun as you want, you
              have the choice of tour guides with whom to tour and drivers for
              your every need! We offer packages in the way that you get the
              most at the lowest price. Book with us and we will always be
              available for you!
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

export default Section3;
