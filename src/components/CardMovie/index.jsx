import PropTypes from "prop-types";
import baseConfig from "../../configs/baseConfig";
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";
import ImageNotFound from "../../assets/image-404.png";

const CardMovie = ({ item, isFullWidth, isTvSeries }) => {
  return (
    <Link to={isTvSeries ? `/series/${item?.id}` : `/movie/${item?.id}`}>
      <div className="group">
        <div
          className={`${
            isFullWidth ? "w-full" : "w-72"
          } h-96 bg-transparent group-hover:shadow-2xl group-hover:shadow-red-600/25 rounded-xl mb-3 overflow-hidden transition-all ease-in-out duration-200`}
        >
          <img
            src={
              item?.poster_path
                ? `${baseConfig.baseImageUrl}${item?.poster_path}`
                : ImageNotFound
            }
            alt="Movie Image"
            className="w-full h-full object-cover object-center group-hover:scale-125 transition-all ease-in-out duration-300"
          />
        </div>
        <h2 className="text-lg font-medium text-white">
          {isTvSeries ? item?.original_name : item?.title}
        </h2>
        <p className="text-base text-slate-200">
          {formatDate(isTvSeries ? item?.first_air_date : item?.release_date)}
        </p>
      </div>
    </Link>
  );
};

export default CardMovie;

CardMovie.propTypes = {
  item: PropTypes.object,
  isFullWidth: PropTypes.bool,
  isTvSeries: PropTypes.bool,
};
