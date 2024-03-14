import PropTypes from "prop-types";
import { useState } from "react";
import {PiFigmaLogoDuotone, PiSketchLogo, PiStepsDuotone} from "react-icons/pi";
import { TbBrandTailwind} from "react-icons/tb";
export const Skill = ({ service }) => {
const skillCategory = [
{"image": <PiFigmaLogoDuotone />},
{"image":<PiSketchLogo />},
{"image":<PiStepsDuotone />},
{"image":<TbBrandTailwind />},
]


{/* <FaReact  />, */}
  const {progress, name} = service;
 
  return (
    <div>
      <div className="card hover:text-red-400 hover:bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-[#140C1C] shadow-xl">
        <div className="py-5 px-8">
          <div className="rounded-xl text-8xl">
            {
              skillCategory.map((skill, idx) => <h1 key={idx}>{console.log(skill.image)}</h1>)
            }
          </div>
          <p className="text-xl text-center font-bold">{progress}%</p>
        </div>
      </div>
      <h2 className="text-center text-white">{name}</h2>
    </div>
  );
};

Skill.propTypes = {
  service: PropTypes.object,
};
