import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Button, makeStyles, TextField, Typography } from '@material-ui/core'
import { Calculate } from 'CalculatorService';
import logo from './assets/logo.png'
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
    Gif
} from "@giphy/react-components";
import { useAsync } from "react-async-hook";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
}));

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

export default function Calculator() {
    const classes = useStyles();
    const [hours, setHours] = useState("");
    const [answer, setAnswer] = useState({ fte: "", remainder: "" });

    const [gif, setGif] = useState(null);
    
    useAsync(async () => {
        const { data } = await giphyFetch.random({ tag: 'Miss you' });
        setGif(data);
    }, [])
    const handleCalculation = async () => {
        const result = Calculate(hours)
        setAnswer({ fte: result.fte, remainder: result.remainder })
        const { data } = await giphyFetch.random({ tag: 'Miss you' });
        setGif(data);
    }

    return (
        <Container maxWidth="xs" className={classes.root} >
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <Grid
                    item
                    xs={12}
                >
                    <img src={logo} alt="logo" width={200} height={300} />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField id="outlined-basic" label="Enter Hours" type="number"
                        InputLabelProps={{
                            shrink: true,
                        }} variant="outlined" onChange={(e) => setHours(e.target.value)} />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Button variant="contained" color="primary" onClick={() => handleCalculation()}>
                        Calculate that shit
                    </Button>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                >
                    {answer.fte &&
                        <Typography color={'textPrimary'} variant="h4" component="h2">
                            {answer.fte} FTE
                        </Typography>
                    }
                    {answer.remainder && <Typography color={'textPrimary'} variant="h4" component="h2">
                        {answer.remainder}
                    </Typography>
                    }
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <Grid
                    item
                    xs={12}
                >
                    {gif && <Gif gif={gif} width={200} />}
                </Grid>
            </Grid>
        </Container>
    )
}
