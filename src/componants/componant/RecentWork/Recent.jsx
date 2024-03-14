import { useEffect, useState } from "react";
import { Recent } from "../Recent/Recent";

export const RecentWork = () => {
  const [recentImage, setRecentImage] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setRecentImage(data));
  }, []);


  return (
    <div>
      <div className=" text-white text-center py-5 space-y-3">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-clip-text text-transparent">
          My Recent Work
        </h1>
        <p className="text-xl md:w-2/3 md:mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div className="text-center space-x-4">
        <button 
         className=" btn text-xl text-white rounded-3xl px-5 py-2 text-center border-0 bg-black hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          All
        </button>
        <button className=" btn text-xl text-white rounded-3xl px-5 py-2 text-center border-0 bg-black hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          Recent
        </button>
        <button className=" btn text-xl text-white rounded-3xl px-5 py-2 text-center border-0 bg-black hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          Branding
        </button>
        <button className=" btn text-xl text-white rounded-3xl px-5 py-2 text-center border-0 bg-black hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          Apps
        </button>
      </div>
      <div className="grid grid-cols-2 p-5">
        {recentImage.map((recent) => (
          <Recent 
          key={recent.id}
           recent={recent}
           ></Recent>
        ))}
      </div> 
    </div>
  );
};
