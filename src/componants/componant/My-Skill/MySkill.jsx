import { useEffect, useState } from "react";
import { Skill } from "./Skill";

export default function MySkill() {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("skill.json")
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
  return (
    <div className="bg-[#050709]">
      <div className=" text-white text-center py-5 space-y-3">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-clip-text text-transparent">
          My Skill
        </h1>
        <p className="text-xl md:w-2/3 md:mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div className="flex items-center justify-between gap-5 w-4/5 mx-auto my-5">
        {
            services.map(data => <Skill key={data.id} service={data}></Skill>)
        }
       
      </div>
    </div>
  );
}
