import MainPage from "./pages/main";
import Error404 from "./pages/error404";

const BASE_URL = "http://localhost:5173/";
const ROUTES = [{ path: "/", element: MainPage }];

function App($container) {
  this.$container = $container;
  const currentPage = undefined;

  const init = () => {
    const findMatchRoute = () =>
      ROUTES.find((route) => route.path === location.pathname);

    const route = () => {
      currentPage = null;
      const TargetPage = findMatchRoute()?.element || Error404;
      currentPage = new TargetPage(this.$container);
    };
  };
  init();
}

export default App;
