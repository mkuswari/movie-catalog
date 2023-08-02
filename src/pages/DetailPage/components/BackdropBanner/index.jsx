import { FiCalendar, FiClock, FiPlayCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useDetailMovieQuery } from "../../../../services/moviesApi";
import baseConfig from "../../../../configs/baseConfig";
import ImageNotFound from "../../../../assets/image-404.png";
import { HashLoader } from "react-spinners";
import formatDate from "../../../../utils/formatDate";

const BackdropBanner = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useDetailMovieQuery(id);

  return (
    <div className="h-[34rem] md:h-[50rem] relative">
      {error ? (
        <div className="mx-auto py-6">
          <p className="text-xl text-red-600">Something error</p>
        </div>
      ) : isLoading ? (
        <div className="h-[34rem] md:h-[46rem] animate-pulse flex items-center justify-center">
          <div className="my-6">
            <HashLoader color="#ff3600" size={80} />
          </div>
        </div>
      ) : data ? (
        <>
          <div className="container flex justify-center">
            <div className="flex gap-10 items-center absolute z-40 md:translate-y-1/2">
              <div className="w-64 h-96 rounded-xl overflow-hidden shadow-2xl hidden md:flex">
                <img
                  src={
                    data?.poster_path
                      ? `${baseConfig.baseImageUrl}${data?.poster_path}`
                      : ImageNotFound
                  }
                  alt="Movie Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="max-w-xl p-5 md:p-0">
                <button className="px-3 py-2 bg-red-600 shadow-xl text-white font-semibold mb-3 rounded-sm flex gap-2 items-center">
                  <FiPlayCircle size={24} />
                  Watch Trailer
                </button>
                <h2 className="text-white drop-shadow-2xl text-5xl font-extrabold">
                  {data?.original_title}
                </h2>
                <p className="text-base text-slate-200 mb-4">{data?.tagline}</p>
                <div className="flex gap-2 my-3">
                  {data?.genres.map((item, index) => (
                    <span
                      key={index}
                      className="bg-red-600 px-2 rounded-lg text-white text-sm"
                    >
                      {item?.name}
                    </span>
                  ))}
                </div>
                <p className="text-white leading-relaxed drop-shadow-xl">
                  {data?.overview}
                </p>
                <div className="flex gap-4 my-3">
                  <div className="text-slate-200 flex items-center gap-2">
                    <FiCalendar />
                    <p>{formatDate(data?.release_date)}</p>
                  </div>
                  <div className="text-slate-200 flex items-center gap-2">
                    <FiClock />
                    <p>{data?.runtime} Minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={
              data?.backdrop_path
                ? `${baseConfig.baseImageUrl}${data?.backdrop_path}`
                : ImageNotFound
            }
            alt="Backdrop Image"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-slate-800 to-slate-800/70"></div>
        </>
      ) : null}
    </div>
  );
};

export default BackdropBanner;
