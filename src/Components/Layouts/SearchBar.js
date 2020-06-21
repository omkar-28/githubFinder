import React, { useState } from "react";
import { InputBase, makeStyles, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    paddingTop: theme.spacing(12),
    marginLeft: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    background: "#f5f5f5",
    width: "100%",
  },
}));

const SearchBar = ({ inputHandler, clear, clearSearch }) => {
  const [text, setText] = useState("");

  const onSubmitUser = (e) => {
    e.preventDefault();
    inputHandler(text);
    setText("");
  };

  const classes = useStyles();
  return (
    <Container className={classes.cardContent} maxWidth="md">
      <div className={classes.search}>
        <form onSubmit={onSubmitUser}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        {clear ? (
          <Button variant="contained" color="secondary" onClick={clearSearch}>
            Clear
          </Button>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default SearchBar;
