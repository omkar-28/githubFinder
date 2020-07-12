import React, { useEffect, useContext, useState } from "react";
import { Container, makeStyles, Fab } from "@material-ui/core";
import FeaturedPost from "./UserDetails";
import { Link } from "react-router-dom";
import Loader from "../Layouts/Loader";
import GithubContext from "../../Context/githubContext";
import Repos from "./Repos";
import { fetchRepos } from "../../api";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading } = githubContext;
  const [topRepos, setTopRepos] = useState([]);

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const getRepos = async (userLogin) => {
    const fetchedRepos = await fetchRepos(userLogin);
    setTopRepos(fetchedRepos);
  };

  const classes = useStyles();

  const {
    name,
    company,
    avatar_url,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <Container className={classes.cardContent} maxWidth="md">
      <Fab variant="extended" className={classes.backButton}>
        <Link
          to="/"
          style={{
            color: "#333",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Back to Search
        </Link>
      </Fab>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <FeaturedPost
            name={name}
            hireable={hireable}
            bio={bio}
            avatar_url={avatar_url}
            login={login}
            company={company}
            blog={blog}
            followers={followers}
            following={following}
            public_repos={public_repos}
            public_gists={public_gists}
            html_url={html_url}
          />

          <h2 className={classes.topRepo}>Top Repos</h2>
          {topRepos.length > 0 && <Repos topRepos={topRepos} />}
        </React.Fragment>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
  },
  backButton: {
    marginBottom: theme.spacing(3),
  },
  topRepo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default React.memo(User);
