import Image from "next/image";

const Section4 = () => {
  return (
    <>
      <div className="section4 relative ">
        <Image
          src="/background4.png"
          width={1920}
          height={450}
          alt="Background Image"
          className="w-full mt-53"
        />
        <Image
          src="/woman4.png"
          width={427}
          height={600}
          alt="woman Image"
          className="absolute -top-247 left-61"
        />
        <div className="absolute bg-[#ffffff43] top-267 w-[596px] h-81 mx-4 lg:mx-18 flex flex-col items-center rounded-3xl">
          <h2 className="text-my-gray text-3xl w-[450px] text-center pt-8 font-bold">Get Special Offers for Organizations</h2>
          <p className="text-center text-lg pt-8 w-[483px] pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-primary-color w-[212px] h-12 text-white rounded-full">Contact Us</button>
        </div>
      </div>

      
    </>
  );
};

export default Section4;
