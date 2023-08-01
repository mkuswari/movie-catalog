import { createBrowserRouter } from "react-router-dom";
import { DetailPage, LandingPage } from "../pages";
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
]);

export default router;
