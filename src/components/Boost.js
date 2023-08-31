import { Box, Typography } from "@mui/material";
import React from "react";
import MyButton from "./UI/MyButton";
import theme from "../theme";
import boostImageDs from "../images/bg-boost-desktop.svg";
import boostImageMb from "../images/bg-boost-mobile.svg";

const Boost = () => {
  return (
    <Box
      sx={{
        padding: "40px 20px",
        display: " flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.second,
        backgroundImage: {
          xs: `url(${boostImageMb})`,
          sm: `url(${boostImageDs})`,
        }, // Set the background image
        backgroundSize: "cover", // Adjust the background size
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color={theme.palette.background.default}
      >
        Boost Your links today!
      </Typography>
      <MyButton>Get Started</MyButton>
    </Box>
  );
};

export default Boost;
