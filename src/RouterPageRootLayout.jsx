import { Outlet } from "react-router-dom";
import RouterPageNavigation from "./RouterPageNavigation";
import classes from "./RouterPageRootLayout.module.css";

export default function RouterPageRootLayout() {
  return (
    <>
      <RouterPageNavigation />
      <div className={classes.content}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
