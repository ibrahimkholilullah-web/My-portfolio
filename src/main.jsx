import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/router";
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="bg-[#111827]">
   <React.StrictMode>
    <div className="container rounded-xl mx-auto bg-[#111827] text-white">
    <RouterProvider router={router} />
    </div>
    <Toaster />
  </React.StrictMode>
 </div>
);
