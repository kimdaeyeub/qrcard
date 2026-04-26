import { Outlet } from "react-router";
import NavigationBar from "../components/navigation-bar";

const NavLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default NavLayout;
