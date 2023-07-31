import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import BannerMovie from "../../../../components/BannerMovie";
import {
  useGenreMoviesQuery,
  usePopularMoviesQuery,
} from "../../../../services/moviesApi";

const HeroBanner = () => {
  const {
    data: movieData,
    error: movieError,
    isLoading: movieLoading,
  } = usePopularMoviesQuery();
  const {
    data: genreData,
    error: genreError,
    isLoading: genreLoading,
  } = useGenreMoviesQuery();

  return (
    <>
      {movieError || genreError ? (
        <p>Something wrong</p>
      ) : movieLoading || genreLoading ? (
        <p>Loading...</p>
      ) : movieData || genreData ? (
        <Swiper
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          loop={true}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {movieData.results.slice(0, 7).map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BannerMovie item={item} genres={genreData.genres} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
    </>
  );
};

export default HeroBanner;
