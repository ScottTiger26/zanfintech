// src/components/Hero.jsx
import heroImg from "@/assets/bull.jpeg"; // your image
import cardImg from "@/assets/react.svg";   // card image

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-10 py-20 gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-5xl font-bold mb-6">The next gen payment method.</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md mb-8">Get your card</button>

        <div className="flex gap-8 text-sm text-gray-700">
          <div>
            <p className="text-xl font-bold">2943</p>
            <p>Cards delivered</p>
          </div>
          <div>
            <p className="text-xl font-bold">$1M+</p>
            <p>Transaction completed</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative flex justify-center items-center">
        <div className="absolute w-[300px] h-[300px] bg-lime-200 rounded-full -z-10"></div>
        <img src={heroImg} alt="Person" className="w-[280px] z-10" />
        <img src={cardImg} alt="Card" className="absolute bottom-0 w-[220px] shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
