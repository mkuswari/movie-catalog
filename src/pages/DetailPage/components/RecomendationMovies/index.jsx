import { CardMovie } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "react-router-dom";
import { useRecomendationMoviesQuery } from "../../../../services/moviesApi";
import { HashLoader } from "react-spinners";

const RecomendationMovies = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useRecomendationMoviesQuery(id);

  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-white text-3xl font-bold">Recomendation Movies</h2>
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
                  <CardMovie item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecomendationMovies;
