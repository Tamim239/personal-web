import PropTypes from 'prop-types';
export const Recent = ({ recent }) => {
  const { title, description, cover_img } = recent;
  return (
    <div className="my-10 w-4/5 mx-auto">
      <div className="card card-compact h-96 bg-gradient-to-r from-[#7A47E0] to-[#391E6E] shadow-xl">
        <figure>
          <img
            src={cover_img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p className='font-medium'>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-info outline-0 border-0 text-base">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recent.propTypes = {
recent: PropTypes.object,
}