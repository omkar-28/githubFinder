import React, { useContext, useEffect } from "react";
import UserItems from "../User/UserItems";
import { Grid, Container, makeStyles } from "@material-ui/core";
import Boundries from "../../Boundries";
import Loader from "../Layouts/Loader";
import GithubContext from "../../Context/githubContext";

const Users = (props) => {
  const githubContext = useContext(GithubContext);
  const { loading, users, getUserList } = githubContext;

  useEffect(() => {
    getUserList();
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();
  return (
    <Boundries>
      <Container className={classes.cardContent} maxWidth="md">
        {loading ? (
          <Loader />
        ) : (
          <Grid container spacing={4}>
            {users.map((user) => (
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
