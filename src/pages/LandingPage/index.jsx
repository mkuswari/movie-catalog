import HeroBanner from "./components/HeroBanner";
import TopIndonesianMovies from "./components/TopIndonesianMovies";
import TopSeries from "./components/TopSeries";
import TrendingMovies from "./components/TrendingMovies";

export default function LandingPage() {
  return (
    <>
      <HeroBanner />
      <TrendingMovies />
      <TopIndonesianMovies />
      <TopSeries />
    </>
  );
}
