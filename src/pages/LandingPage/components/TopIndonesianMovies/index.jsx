import { CardTopMovie } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTrendingMoviesIndonesiaQuery } from "../../../../services/moviesApi";
import { HashLoader } from "react-spinners";

const TopIndonesianMovies = () => {
  const { data, error, isLoading } = useTrendingMoviesIndonesiaQuery();

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-white text-3xl font-bold">
          🥇 Top 10 Indonesian Movies
        </h2>
        <p className="text-white/80 text-base mt-2">
          Here are top 10 movies from indonesia
        </p>
        <div className="mt-8 flex gap-8 justify-between overflow-hidden">
          {error ? (
            <div className="mx-auto py-6">
              <p className="text-xl text-red-600">Something error</p>
            </div>
          ) : isLoading ? (
            <div className="mx-auto my-6">
              <HashLoader color="#ff3600" size={80} />
            </div>
          ) : data ? (
            <Swiper
              breakpoints={{
                440: {
                  slidesPerView: 2,
                  spaceBetween: 200,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 100,
                },
              }}
            >
              {data.results.slice(0, 10).map((item, index) => (
                <SwiperSlide key={item.id}>
                  <CardTopMovie item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default TopIndonesianMovies;
