import { createBrowserRouter } from "react-router-dom";
import { DetailPage, LandingPage, SearchPage } from "../pages";
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
    path: "/detail/:id",
    element: (
      <MainLayout>
        <DetailPage />
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
