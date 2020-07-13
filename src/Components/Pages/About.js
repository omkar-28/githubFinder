import React from "react";
import { Container, makeStyles } from "@material-ui/core";

export const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardContent} maxWidth="md">
      <h1>About Page</h1>
      <br />
      <p>
        Github User Finder, this app is built for learning react js, by
        following the tutorials and understanding the basics fundamentals of the
        React Js and Material UI
      </p>
      <br />
      <h3>Version 0.1</h3>
      <p>
        This Project was built using the React class based components using the
        lifecycle Methods for calling the Api and displaying the Users List.
        This was later refactored into React function based components.{" "}
      </p>
      <br />
      <h3>Version 0.2</h3>
      <p>Added The Top Repos components where the top 9 repos are displayed</p>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
  },
}));

export default About;
