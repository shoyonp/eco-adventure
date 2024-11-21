import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const HomeLayout = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto"><Navbar></Navbar></nav>
     <main className="w-11/12 mx-auto"> <Outlet></Outlet></main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
