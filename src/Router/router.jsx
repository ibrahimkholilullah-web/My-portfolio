import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import Home from "./Portfolio/Page/Home/Home";
import Contact from "./Portfolio/Contact/Contact";
import Abouts from "./Portfolio/Page/Home/About/Abouts";
import HistoryDitails from "./Portfolio/Ditails/HistoryDitails";
import TravelDitails from "./Portfolio/Ditails/TravelDitails";
import Gadget from "./Portfolio/Ditails/Gadget";
import JerinParlour from "./Portfolio/Ditails/JerinParlour";
import HuntDItails from "./Portfolio/Ditails/HuntDItails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio></Portfolio>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        
        {
          path:'/about',
          element:<Abouts></Abouts>
        },
        {
          path:'/historyDetails',
          element:<HistoryDitails></HistoryDitails>
        },
        {
          path:'/travelDetails',
          element:<TravelDitails></TravelDitails>
        },
        {
          path:'/GadgetDetails',
          element: <Gadget></Gadget>
        },
        {
          path:'/jerinParlour',
          element: <JerinParlour></JerinParlour>
        },
        {
          path:'/huntDItails',
          element: <HuntDItails></HuntDItails>
        }
      ]
    },
  ]);

  export default router