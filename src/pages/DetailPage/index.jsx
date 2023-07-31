import BackdropBanner from "./components/BackdropBanner";
import RecomendationMovies from "./components/RecomendationMovies";
import SimilarMovies from "./components/SimilarMovies";

export default function DetailPage() {
  return (
    <>
      <BackdropBanner />
      <SimilarMovies />
      <RecomendationMovies />
    </>
  );
}
