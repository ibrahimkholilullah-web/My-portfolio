import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import Home from "./Portfolio/Page/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio></Portfolio>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router