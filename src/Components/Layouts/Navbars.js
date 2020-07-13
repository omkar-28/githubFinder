import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  linkText: {
    color: "#FFF",
    textDecoration: "none",
    textTransform: "capitalize",
    fontSize: "16px",
  },
  pageLogo: {
    color: "#FFF",
    textDecoration: "none",
  },
}));

const Navbars = ({ icon, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <i className={icon}></i>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/githubFinder" className={classes.pageLogo}>
              {title}
            </Link>
          </Typography>
          <Button color="inherit">
            <Link className={classes.linkText} color="inherit" to="/about">
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkText} color="inherit" to="/contact">
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbars.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default React.memo(Navbars);
