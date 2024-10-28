import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="text-4xl">This is the home</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
