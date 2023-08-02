import BackdropBanner from "./components/BackdropBanner";
import RecomendationSeries from "./components/RecomendationSeries";
import SimilarSeries from "./components/SimilarSeries";

const DetailSeriesPage = () => {
  return (
    <>
      <BackdropBanner />
      <SimilarSeries />
      <RecomendationSeries />
    </>
  );
};

export default DetailSeriesPage;
