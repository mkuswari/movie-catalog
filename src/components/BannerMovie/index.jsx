import PropTypes from "prop-types";
import baseConfig from "../../configs/baseConfig";

const BannerMovie = ({ item, genres }) => {
  const getGenre = (id) => {
    const filter = genres.filter((item) => item.id === id)[0];

    return filter.name;
  };

  return (
    <div className="h-[34rem] md:h-[46rem] relative">
      <div className="container">
        <div className="absolute top-1/3 max-w-xl z-10">
          <h2 className="text-white drop-shadow-2xl text-5xl font-extrabold">
            {item.title}
          </h2>
          <div className="flex gap-2 my-3">
            {item.genre_ids.map((genre, index) => (
              <span
                key={index}
                className="bg-red-600 shadow-xl px-2 rounded-lg text-white text-sm"
              >
                {getGenre(genre)}
              </span>
            ))}
          </div>
          <p className="text-white leading-relaxed drop-shadow-xl">
            {item.overview}
          </p>
        </div>
      </div>
      <img
        src={`${baseConfig.baseImageUrl}${item.backdrop_path}`}
        alt="Backdrop Image"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
    </div>
  );
};

export default BannerMovie;

BannerMovie.propTypes = {
  item: PropTypes.object,
  genres: PropTypes.array,
};
