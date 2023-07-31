import { RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts";
import router from "./router";
import { Provider } from "react-redux";
import store from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </Provider>
  );
}
