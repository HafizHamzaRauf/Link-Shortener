import React from "react";
import { Button, Typography } from "@mui/material";
import theme from "../../theme";

const styles = {
  button: {
    color: theme.palette.background.default,
    padding: {
      xs: "4px 10px",
      sm: "8px 24px",
    },
    fontWeight: theme.typography.fontWeightBold,
  },
  buttonLabel: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px", // Adjust the font size for smaller devices
    },
  },
};

const MyButton = ({ onClick, children, borderRadius, sx }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        ...styles.button,
        ...sx,
        borderRadius: borderRadius ? "5px" : "25px",
      }}
      variant="contained"
    >
      <Typography
        sx={{
          ...styles.buttonLabel,
        }}
        variant="button"
      >
        {children}
      </Typography>
    </Button>
  );
};

export default MyButton;
