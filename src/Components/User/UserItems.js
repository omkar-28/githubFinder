import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  CardContent: {
    flexGrow: 1,
  },
}));

const UserItems = ({
  user: { login, avatar_url, html_url, type, email, hireable },
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={avatar_url}
          title={login}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {login}
          </Typography>
          <Typography>
            <b>Type:</b> {type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link
              to={`/user/${login}`}
              style={{ color: "blue", textDecoration: "none" }}
            >
              More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserItems;
