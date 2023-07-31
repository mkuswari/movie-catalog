import { CardTopMovie } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopIndonesianMovies = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-white text-3xl font-bold">
          🥇 Top 10 Indonesian Movies
        </h2>
        <div className="mt-8 flex gap-8 justify-between overflow-hidden">
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
            <SwiperSlide>
              <CardTopMovie />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopMovie />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopMovie />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopMovie />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopMovie />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopMovie />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopIndonesianMovies;
