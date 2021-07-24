import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Gif
} from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import { Container, Grid } from "@material-ui/core";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function Gify() {
  const [gif, setGif] = useState(null);
  useAsync(async () => {
    const { data } = await giphyFetch.random({ tag: 'Miss you' });
    setGif(data);
  }, [])
  return gif &&

    <Container maxWidth="xs" >

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={12}
      > <Gif gif={gif} width={200} />;
      </Grid>
    </Container>
}

export default Gify;