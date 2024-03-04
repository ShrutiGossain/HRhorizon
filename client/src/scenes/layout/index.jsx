import React from "react";
import { Box } from "@mui/material";
// import {useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
// import Sidebar from "components/Sidebar";
// import { useGetUserQuery } from "state/api";

const Layout = () => {

  return (
    <Box width="100%" height="100%">
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;