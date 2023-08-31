import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import heroImage from "../images/illustration-working.svg";
import MyButton from "./UI/MyButton";
import theme from "../theme";

const styles = {
  herobox: {
    marginTop: "50px",
    padding: {
      sm: "20px 100px",
    },
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
  stack: {
    padding: {
      sm: "50px 0",
      xs: "0 30px",
    },
    alignItems: "flex-start",
    gap: "10px",
  },
};

const Hero = () => {
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={styles.herobox}>
      {isLargerScreen && (
        <>
          <Stack sx={styles.stack}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                fontSize: "28px", // Adjust font size for mobile devices
                [theme.breakpoints.up("sm")]: {
                  fontSize: "48px", // Default font size for larger devices
                },
              }}
            >
              More than just shorter links
            </Typography>
            <Typography
              color={theme.palette.text.tertiary}
              variant="h6"
              component="p"
              sx={{
                fontSize: "14px", // Adjust font size for mobile devices
                [theme.breakpoints.up("sm")]: {
                  fontSize: "16px", // Default font size for larger devices
                },
              }}
            >
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </Typography>
            <MyButton>Get Started</MyButton>
          </Stack>
          <Box>
            <img
              src={heroImage}
              alt="Hero"
              style={{
                width: "100%", // Default width for mobile
                height: "auto", // Auto height for mobile
                [theme.breakpoints.up("sm")]: {
                  width: "120%", // Adjust width for larger devices
                  height: "90%", // Adjust height for larger devices
                },
              }}
            />
          </Box>
        </>
      )}
      {!isLargerScreen && (
        <>
          <Box>
            <img
              src={heroImage}
              alt="Hero"
              style={{
                width: "100%", // Default width for mobile
                height: "auto", // Auto height for mobile
                [theme.breakpoints.up("sm")]: {
                  width: "120%", // Adjust width for larger devices
                  height: "90%", // Adjust height for larger devices
                },
              }}
            />
          </Box>
          <Stack sx={styles.stack}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                fontSize: "28px", // Adjust font size for mobile devices
                [theme.breakpoints.up("sm")]: {
                  fontSize: "48px", // Default font size for larger devices
                },
              }}
            >
              More than just shorter links
            </Typography>
            <Typography
              color={theme.palette.text.tertiary}
              variant="h6"
              component="p"
              sx={{
                fontSize: "14px", // Adjust font size for mobile devices
                [theme.breakpoints.up("sm")]: {
                  fontSize: "16px", // Default font size for larger devices
                },
              }}
            >
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </Typography>
            <MyButton>Get Started</MyButton>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Hero;
