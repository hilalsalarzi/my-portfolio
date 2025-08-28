import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  // const location = useLocation();

  // Hide navbar & footer on these routes
  // const noLayoutRoutes = ["/login"];
  // const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {/* {!hideLayout && <Navbar />} */}
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* ✅ Child routes render here */}
      </main>
      <Footer />
      {/* {!hideLayout && <Footer />} */}
    </>
  );
};

export default AppLayout;
