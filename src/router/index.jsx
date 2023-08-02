import { createBrowserRouter } from "react-router-dom";
import {
  DetailPage,
  DetailSeriesPage,
  LandingPage,
  MoviesCatalogPages,
  SearchPage,
  SeriesCatalogPages,
} from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <LandingPage />
      </MainLayout>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <MainLayout>
        <DetailPage />
      </MainLayout>
    ),
  },
  {
    path: "/series/:id",
    element: (
      <MainLayout>
        <DetailSeriesPage />
      </MainLayout>
    ),
  },
  {
    path: "/movies-catalog",
    element: (
      <MainLayout>
        <MoviesCatalogPages />
      </MainLayout>
    ),
  },
  {
    path: "/series-catalog",
    element: (
      <MainLayout>
        <SeriesCatalogPages />
      </MainLayout>
    ),
  },
  {
    path: "/search/:query/:page",
    element: (
      <MainLayout>
        <SearchPage />
      </MainLayout>
    ),
  },
]);

export default router;
