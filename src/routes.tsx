import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Sobre from "./sobre/Sobre.tsx";
import ScrollToTop from "./components/pageTop.tsx";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/sobre",
    element: (
      <>
        <ScrollToTop />
        <Sobre />
      </>
    ),
  },
]);

export default AppRouter;
