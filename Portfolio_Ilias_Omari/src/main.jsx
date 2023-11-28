import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Skills from "./components/pages/Skills.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Money from "./components/pages/Money.jsx";
import Castle from "./components/pages/Castle.jsx";
import Home from "./components/pages/Home.jsx";
import Animations from "./components/pages/Animations.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/projects/history-of-money",
    element: <Money />,
  },
  {
    path: "/projects/castel-of-gaasbeek",
    element: <Castle />,
  },

  {
    path: "/projects/animations",
    element: <Animations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
