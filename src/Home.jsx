import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>This is the home</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
