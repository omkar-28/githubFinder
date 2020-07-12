import React from "react";
import { Container, makeStyles } from "@material-ui/core";

export const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardContent} maxWidth="md">
      <h1>Contact Me</h1>
      <div className={classes.social}>
        <a href="https://github.com/omkar-28" className={classes.github}>
          <i className="fa fa-github"></i>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/omkar-khatavkar-bb7051117/"
          className={classes.linkedIn}
        >
          <i className="fa fa-linkedin"></i>
        </a>{" "}
        <a href={"mailto:omikhatavkar2@gmail.com"} className={classes.gmail}>
          <i className="fa fa-google"></i>
        </a>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
  },
  social: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(2),
  },
  github: {
    color: "#211F1F",
    display: "inline-block",
  },
  linkedIn: {
    color: "#0e76a8",
    display: "inline-block",
  },
  gmail: {
    color: "#D44638",
    display: "inline-block",
  },
}));

export default Contact;
