import PropTypes from "prop-types";
import baseConfig from "../../configs/baseConfig";
import formatDate from "../../utils/formatDate";

const CardMovie = ({ item }) => {
  console.log(item);

  return (
    <div className="group">
      <div className="w-72 h-96 bg-transparent group-hover:shadow-2xl group-hover:shadow-red-600/25 rounded-xl mb-3 overflow-hidden transition-all ease-in-out duration-200">
        <img
          src={`${baseConfig.baseImageUrl}${item?.poster_path}`}
          alt="Movie Image"
          className="w-full h-full object-cover object-center group-hover:scale-125 transition-all ease-in-out duration-300"
        />
      </div>
      <h2 className="text-lg font-medium text-white">{item?.title}</h2>
      <p className="text-base text-slate-200">
        {formatDate(item?.release_date)}
      </p>
    </div>
  );
};

export default CardMovie;

CardMovie.propTypes = {
  item: PropTypes.object,
};
