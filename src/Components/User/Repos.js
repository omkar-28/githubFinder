import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";

const Repos = ({ topRepos }) => {
  const [topRepo, setTopRepos] = useState([]);

  useEffect(() => {
    if (topRepos.length) {
      getRepo("star");
    }
    // eslint-disable-next-line
  }, []);

  const getRepo = (type) => {
    const Limit = 9;
    const filters = {
      stars: "stargazers_count",
      forks: "forks_count",
      size: "size",
    };

    const sortdata = filters[type];
    const sorted = topRepos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortdata] - a[sortdata])
      .slice(0, Limit);
    setTopRepos(sorted);
  };

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={4}>
        {topRepo.length ? (
          <Fragment>
            {topRepo.map((repo) => (
              <Grid item xs={12} sm={6} md={6} key={repo.id}>
                <a href={repo.url} target="blank" className={classes.links}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {repo.name}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {repo.description}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.repoDetails}>
                      <div>
                        <i className="fa fa-star-o" aria-hidden="true">
                          {" "}
                          {repo.stargazers_count}
                        </i>
                        <i className="fa fa-code-fork" aria-hidden="true">
                          {" "}
                          {repo.forks_count}
                        </i>
                      </div>
                      <div>
                        <i className="fa fa-code" aria-hidden="true">
                          {" "}
                          {repo.language}
                        </i>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            ))}
          </Fragment>
        ) : (
          <h2>No repos Found</h2>
        )}
      </Grid>
    </div>
  );
};

export default Repos;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 185,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 7px 30px -10px rgba(150,170,180,0.5)",
    "& i": {
      fontSize: "16px",
      marginRight: "15px",
    },
  },
  links: {
    color: "inherit",
    textDecoration: "none",
  },
  media: {
    height: 140,
  },
  TopRepos: {
    paddingBottom: "20px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  repoDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
