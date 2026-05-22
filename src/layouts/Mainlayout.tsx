import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/Whatsapp";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Mainlayout;
