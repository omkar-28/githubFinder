import React from "react";
import UserItems from "../User/UserItems";
import { Grid, Container, makeStyles } from "@material-ui/core";
import Boundries from "../../Boundries";
import Loader from "../Layouts/Loader";

const Users = (props) => {
  const classes = useStyles();
  return (
    <Boundries>
      <Container className={classes.cardContent} maxWidth="md">
        {props.Loading ? (
          <Loader />
        ) : (
          <Grid container spacing={4}>
            {props.users.map((user) => (
              <UserItems key={user.id} user={user} />
            ))}
          </Grid>
        )}

        {props.users.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>User Not Found</h1>
        ) : (
          <Grid container spacing={4}>
            {props.users.map((user) => (
              <UserItems key={user.id} user={user} />
            ))}
          </Grid>
        )}
      </Container>
    </Boundries>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
}));

export default Users;
