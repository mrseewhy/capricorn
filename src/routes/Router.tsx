import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import OurPropertiesPage from "../pages/OurPropertiesPage";
import ServicesPage from "../pages/ServicesPage";
import ContactUsPage from "../pages/ContactUsPage";
import Mainlayout from "../layouts/Mainlayout";

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
