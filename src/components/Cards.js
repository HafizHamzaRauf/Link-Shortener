import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import brandIcon from "../images/icon-brand-recognition.svg";
import DetailedIcon from "../images/icon-detailed-records.svg";
import CustomizeIcon from "../images/icon-fully-customizable.svg";
import theme from "../theme";
const styles = {
  cardContainer: {
    position: "relative",
    marginTop: "100px",

    display: "flex ",
    gap: "40px",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
  iconStyles: {
    padding: "4px",
    backgroundColor: theme.palette.primary.second,
    width: 85,
    height: 85,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-70px",
    alignSelf: {
      xs: "center",
      sm: "flex-start",
    },
  },
  box: {
    backgroundColor: theme.palette.background.default,
    padding: "30px ",
    display: "flex ",
    flexDirection: "column",
    gap: "10px",
    borderRadius: "10px",
    zIndex: 200,
  },
};
const Cards = () => {
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  let line;
  if (isLargerScreen) {
    line = (
      <hr
        style={{
          position: "absolute",
          top: "150px",
          padding: "4px",
          backgroundColor: theme.palette.primary.main,
          width: "100%",
        }}
      ></hr>
    );
  } else {
    line = (
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "50%",
          transform: "translate(-50%)",
          padding: "4px",
          height: "100%",
          backgroundColor: theme.palette.primary.main,
        }}
      ></div>
    );
  }
  return (
    <Box sx={{ ...styles.cardContainer, alignSelf: "flex-start" }}>
      {line}
      <Box sx={{ ...styles.box, height: "230px" }}>
        <Box sx={styles.iconStyles}>
          <img src={brandIcon} />
        </Box>
        <Typography variant="h5" component={"h1"}>
          Brand Recognition
        </Typography>
        <Typography
          variant="p"
          component={"p"}
          color={theme.palette.text.tertiary}
        >
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </Typography>
      </Box>
      <Box
        sx={{
          ...styles.box,
          marginTop: isLargerScreen ? "50px" : "30px",
          height: "230px",
        }}
      >
        <Box sx={styles.iconStyles}>
          <img src={DetailedIcon} />
        </Box>
        <Typography variant="h5" component={"h1"}>
          Detailed Records
        </Typography>
        <Typography
          variant="p"
          component={"p"}
          color={theme.palette.text.tertiary}
        >
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </Typography>
      </Box>
      <Box
        sx={{
          ...styles.box,
          marginTop: isLargerScreen ? "100px" : "30px",
          height: "230px",
        }}
      >
        <Box sx={styles.iconStyles}>
          <img src={CustomizeIcon} />
        </Box>
        <Typography variant="h5" component={"h1"}>
          Fully Customizable
        </Typography>
        <Typography
          variant="p"
          component={"p"}
          color={theme.palette.text.tertiary}
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Typography>
      </Box>
    </Box>
  );
};

export default Cards;
