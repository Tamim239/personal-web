import { FaTwitter, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
export default function HeaderHandle() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-around">
        {/* left side */}
        <div className="text-white">
          <h3 className="text-3xl font-semibold">I am Tamim</h3>
          <h1 className="text-7xl font-bold leading-none">
            <TypeAnimation
              sequence={[
                "Front End",
                500,
                "Front End Web", //  Continuing previous Text
                500,
                "Front End Web Developer",
                500,
                "Front End Web",
                500,
                "Front End",
                500,
                "",
                500,
              ]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>
          <p className="w-3/4 text-xl py-5">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div className="flex items-center gap-6">
            <button className="btn btn-outline text-[#7A47E0] hover:bg-[#391E6E]">
              Downloaded CV
            </button>
            <div className="flex items-center gap-3 text-[#7A47E0] *:rounded-full hover:*:text-white text-4xl *:p-2 hover:*:bg-[#7A47E0] hover:*:duration-700 ">
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
              <FaGithub />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className=" w-1/2 h-full border border-[#7A47E0] bg-black rounded-3xl rotate-6 hover:rotate-0 hover:duration-700 ">
          <img
            src="public/IMG_20230423_143749-removebg-preview (1).png"
            alt="personal"
            className="w-full h-full bg-no-repeat"
          />
        </div>
      </div>
      <div className="text-white flex p-5 justify-between *:flex *:items-center *:gap-5 my-7">
        <div>
         <h1 className="text-6xl font-bold">0
         <CountUp end={2} /></h1>
          <p className="text-2xl">Years of <br /> Experience</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold"><CountUp end={50}/>+</h1>
          <p className="text-2xl">Project<br />Completed </p>
        </div>
        <div>
          <h1 className="text-6xl font-bold"><CountUp end={500} /></h1>
          <p className="text-2xl">Happy <br /> Clients</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold">0<CountUp end={2} /></h1>
          <p className="text-2xl">Years of <br /> Experience</p>
        </div>
      </div>
    </div>
  );
}
