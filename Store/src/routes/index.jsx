import AllToys from "../pages/User/Catalog/AllToys/AllToys";
import Home from "../pages/User/Home/Home";
import StuffedAnimals from "../pages/User/Catalog/Category/Stuffed/Stuffed";
import WoodenToys from "../pages/User/Catalog/Category/Wooden/Wooden";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/catalog",
    component: AllToys,
  },
  {
    path: "/catalog/category/stuffed-animals",
    component: StuffedAnimals,
  },
  {
    path: "/catalog/category/wooden-toys",
    component: WoodenToys,
  },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
