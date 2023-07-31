import { createBrowserRouter } from "react-router-dom";
import { DetailPage, LandingPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

export default router;
