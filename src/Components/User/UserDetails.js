import React, { Fragment } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  Button,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "20px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    margin: "auto",
    padding: "15px",
  },
  green: {
    color: "green",
  },
  userDetail: {
    marginTop: "15px",
    marginBottom: "5px",
  },
  mb: {
    marginBottom: "5px",
  },
  buttons: {
    padding: "20px 15px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    flex: "1",
    justifyContent: "space-evenly",
  },
});

export function FeaturedPost({
  name,
  hireable,
  bio,
  avatar_url,
  login,
  company,
  blog,
  followers,
  following,
  public_repos,
  public_gists,
  html_url,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ display: "flex", alignItems: "center" }}
            >
              <strong>hireable:</strong>{" "}
              {hireable ? (
                <CheckCircleIcon color="action" />
              ) : (
                <CancelIcon color="action" />
              )}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {bio}
            </Typography>

            <Button variant="contained" color="primary" href={html_url}>
              Visit Github Profile
            </Button>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.userDetail}
            >
              <strong>Username:</strong> {login}
            </Typography>
            <Typography variant="subtitle1" paragraph className={classes.mb}>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </Typography>
            <Typography variant="subtitle1" paragraph className={classes.mb}>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cardMedia}
          src={avatar_url}
          title={login}
          component="img"
        />
      </Card>

      <Card className={classes.card}>
        <div className={classes.buttons}>
          <Button variant="contained" color="primary">
            Followers : {followers}
          </Button>
          <Button variant="contained" color="secondary">
            Following : {following}
          </Button>
          <Button variant="contained" color="primary">
            Public Repos : {public_repos}
          </Button>
          <Button variant="contained">Public Gists : {public_gists}</Button>
        </div>
      </Card>
    </Grid>
  );
}

export default FeaturedPost;
