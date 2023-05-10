import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@mui/material";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js";

import theme from "./theme.js";

import memories from "./images/memories.png";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="static"
        color="inherit"
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
          }}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          src={memories}
          sx={{
            marginLeft: "15px",
          }}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
