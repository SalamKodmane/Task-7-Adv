import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-my-gray text-white px-4 lg:px-18 pt-10 mt-40">
        <Image
          src="/logo.png"
          width={133}
          height={130}
          alt="logo of the page"
          className="pb-8"
        />
        <div className="border max-w-[1420px]"></div>
        <div className="pt-8">
          <div className="flex gap-24 flex-col lg:flex-row ">
            <div>
              <h4 className="pb-5 font-bold text-xl hover:text-primary-color">
                Services
              </h4>
              <p className="pb-2 text-lg hover:text-primary-color">
                Bike and Rickshaw rental
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Guided Tours of Lucca
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Guided Bike Tour of Lucca
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Trip In The Tuscan Hills
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Transportation With Luxury Cars
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Wine Tours By Bus With Guide
              </p>
            </div>
            <div>
              <h4 className="pb-5 font-bold text-xl hover:text-primary-color">
                Home
              </h4>
              <p className="pb-2 text-lg hover:text-primary-color">Home</p>
              <p className="pb-2 text-lg hover:text-primary-color">About Us</p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Tour Packages
              </p>
            </div>
            <div>
              <h4 className="pb-5 font-bold text-xl hover:text-primary-color">
                Help
              </h4>
              <p className="pb-2 text-lg hover:text-primary-color">
                Terms of Use
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                Provicy Policy
              </p>
            </div>
            <div>
              <h4 className="pb-5 font-bold text-xl hover:text-primary-color">
                Contacts
              </h4>
              <p className="pb-2 text-lg hover:text-primary-color">
                Piazza Napoleone, Lucca, Tuscany
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                +39 346 368 5708
              </p>
              <p className="pb-2 text-lg hover:text-primary-color">
                italiainlimo@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="pb-5 font-bold text-xl hover:text-primary-color">
                Social Media
              </h4>
              <div className="flex gap-5">
                <Image
                  src="/twitter.svg"
                  width={50}
                  height={50}
                  alt="twitter"
                />
                <Image
                  src="/facebook.svg"
                  width={50}
                  height={50}
                  alt="facebook"
                />
                <Image
                  src="/instagram.svg"
                  width={50}
                  height={50}
                  alt="instagram"
                />
              </div>
            </div>
          </div>
          <div className="border max-w-[1420px] mt-8"></div>
          <div className="flex justify-center items-center pt-8 pb-10">
            <p>Copyright © 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
