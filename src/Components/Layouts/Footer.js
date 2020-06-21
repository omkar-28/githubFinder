import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    clear: "both",
  },
  text: {
    fontSize: "1rem",
  },
}));

const Footer = ({ title }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        className={classes.text}
      >
        {"Copyright © "}
        {title} {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
};

export default Footer;
