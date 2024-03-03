import React from 'react'
import {
  // LightModeOutlined,
  // DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  // SettingsOutlined,
  // ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
// import { useDispatch } from "react-redux";
// import { setMode } from "state";
// import profileImage from "assets/profile.jpeg";
import { useTheme } from '@emotion/react';
import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material';


const Navbar = () => {
  // const dispatch = useDispatch();
  const theme = useTheme();

  return <AppBar>
    sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => console.log('open/close sidebar')}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
          backgroundColor = {theme.palette.background.alt}
          borderRadius = "9px"
          gap = "3rem"
          p = "0.1rem 1.5rem"
          >
            <InputBase placeholder='Search...'></InputBase>
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        </Toolbar>
  </AppBar>
}

export default Navbar