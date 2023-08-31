import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Drawer,
  Typography,
  Box,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

import React, { useState } from "react";
import theme from "../theme";
import logo from "../images/logo.svg";
import MyButton from "./UI/MyButton";

const styles = {
  appBar: {
    backgroundColor: theme.palette.background.default,
    boxShadow: "none", // Remove the shadow,
    padding: "35px 90px", // top/right/bottom/left
    [theme.breakpoints.down("sm")]: {
      padding: "20px", // Adjust padding for small devices
    },
  },
  toolbar: {
    display: "flex",
    gap: "150px",
    justifyContent: "space-between",
  },
  toolbarLeftBox: {
    display: "flex",
    justifyContent: "space-between",
    gap: "32px",
  },
  logo: {
    width: 140, // Adjust the width as needed
    height: "auto",
    padding: 1,
    borderRadius: 0,
  },
  linkBox: {
    gap: "18px",
    display: "flex",
    alignItems: "center",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
  },
  link: {
    fontWeight: "bold", // Make the links bold
    textDecoration: "none", // Remove default underline
    color: theme.palette.text.tertiary, // Set link color
    fontSize: "16px",
    "&:hover": {
      color: theme.palette.text.primary, // Apply hover color
    },
  },
  authBtnBox: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },
  mobileMenuContent: {
    position: "fixed",
    top: "20%", // Center vertically
    left: "60%", // Center horizontally
    transform: "translate(-70%, -10%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.second,
    zIndex: 1000,
    padding: "10px 50px",
    borderRadius: "5px",
    color: theme.palette.background.default,
  },
};
const links = ["Features", "Pricing", "Resources"];
const ResponsiveAppbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar sx={styles.appBar} position="relative">
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.toolbarLeftBox}>
          <Box sx={styles.logoBox}>
            <Avatar src={logo} sx={styles.logo} alt="Logo" />
          </Box>
          <Box
            sx={{
              ...styles.linkBox,
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            {links.map((a) => (
              <Typography
                component="a"
                variant="h6"
                href="#"
                onClick={closeMobileMenu}
                sx={styles.link}
                key={a}
              >
                {a}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.authBtnBox,
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <Typography
            variant="h6"
            component="a"
            href="#"
            onClick={closeMobileMenu}
            sx={styles.link}
          >
            Login
          </Typography>
          <MyButton onClick={closeMobileMenu}>Signup</MyButton>
        </Box>
        <IconButton
          onClick={toggleMobileMenu}
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            display: {
              xs: "block", // Show on mobile only
              sm: "none", // Hide on desktop
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {mobileMenuOpen && (
        <Box sx={styles.mobileMenuContent}>
          <MenuItem>Features</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Resources</MenuItem>
          <Divider
            sx={{
              backgroundColor: theme.palette.text.disabled,
              width: "100%",
            }}
          ></Divider>
          <MenuItem onClick={closeMobileMenu}>Login</MenuItem>
          <MenuItem onClick={closeMobileMenu}>
            <MyButton>Signup</MyButton>
          </MenuItem>
        </Box>
      )}
    </AppBar>
  );
};

export default ResponsiveAppbar;
