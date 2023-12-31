import { CardMovie } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSeriesVideosQuery } from "../../../../services/moviesApi";
import { HashLoader } from "react-spinners";

const TopSeries = () => {
  const { data, error, isLoading } = useSeriesVideosQuery();

  return (
    <section className="pt-16">
      <div className="container">
        <h2 className="text-white text-3xl font-bold">🌟 Top Series</h2>
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
              {data.results.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardMovie item={item} isTvSeries={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default TopSeries;
