import PropTypes from "prop-types";
export const Skill = ({ service }) => {
const {progress, name, image} = service;
  return (
    <div className="pb-10">
      <div className="card hover:text-red-400 hover:bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-[#140C1C] shadow-xl hover:border">
        <div className="py-5 px-8">
          <div className="rounded-xl text-8xl">
            <img src={image} alt="logo" className="w-28" />
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
