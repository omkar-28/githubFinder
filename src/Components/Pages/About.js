import React from "react";
import { Container, makeStyles } from "@material-ui/core";

export const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardContent} maxWidth="md">
      <h1>About Page</h1>
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
