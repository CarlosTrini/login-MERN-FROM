import React from "react";
import { Outlet } from "react-router";

import Header from "./private/Header";

const Layout = () => {
  return (
    <>
     <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
