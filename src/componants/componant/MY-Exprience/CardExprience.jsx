import PropTypes from 'prop-types';
export const CardExprience = ({detail}) => {
    const {year, technology_name, place} = detail;
      
  return (
    <div>
        <div className="hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E] bg-[#140C1C] text-neutral-content mb-5 rounded-3xl">
          <div className="px-10 py-10">
            <h3 className='text-2xl font-semibold'>{year}</h3>
            <h2 className="text-3xl font-extrabold">{technology_name}</h2>
            <p className='text-xl font-semibold'>{place}</p>
          </div>
        </div>
    </div>
  )
}

CardExprience.propTypes = {
    detail: PropTypes.object
}