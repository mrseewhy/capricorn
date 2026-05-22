import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import OurPropertiesPage from "../pages/OurPropertiesPage";
import ServicesPage from "../pages/ServicesPage";
import ContactUsPage from "../pages/ContactPage";
import Mainlayout from "../layouts/Mainlayout";
import Nigeria from "../pages/Nigeria";
import SouthAfrica from "../pages/SouthAfrica";

const router = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/our-properties",
        element: <OurPropertiesPage />,
      },
      {
        path: "/our-properties/nigeria",
        element: <Nigeria />,
      },
      {
        path: "/our-properties/nigeria",
        element: <Nigeria />,
      },
      {
        path: "/our-properties/south-africa",
        element: <SouthAfrica />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "*",
        element: <div>404</div>,
        loader: () => {
          throw new Response(null, {
            status: 404,
            statusText: "Not Found",
          });
        },
      },
    ],
  },
]);

export default router;
