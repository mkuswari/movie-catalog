import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNowPlayingMoviesQuery } from "../../../../services/moviesApi";
import { CardMovie } from "../../../../components";

const NowPlaying = () => {
  const { data, error, isLoading } = useNowPlayingMoviesQuery();

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-white text-3xl font-bold">🎞️ Now Playing</h2>
        <div className="mt-8 flex gap-8 justify-between overflow-hidden">
          {error ? (
            <p>Something wrong</p>
          ) : isLoading ? (
            <p>Loading...</p>
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
              {data.results.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardMovie item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
