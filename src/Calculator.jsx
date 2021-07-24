import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Button, makeStyles, TextField, Typography } from '@material-ui/core'
import { Calculate } from 'CalculatorService';
import logo from './assets/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 2,
    },
}));
export default function Calculator() {
    const classes = useStyles();
    const [hours, setHours] = useState("");
    const [answer, setAnswer] = useState({ fte: "", remainder: "" });

    const handleCalculation = () => {
        const foo = Calculate(hours)
        setAnswer({ fte: foo.fte, remainder: foo.remainder })
    }
    return (
        <Container maxWidth="xs" className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                >
                    <img src={logo} alt ="logo" width={200} height={300} />
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                >
                    <TextField id="outlined-basic" label="Enter Hours" type="number"
                        InputLabelProps={{
                            shrink: true,
                        }} variant="outlined" onChange={(e) => setHours(e.target.value)} />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        xs={12}
                    >
                        <Button variant="contained" color="primary" onClick={() => handleCalculation()}>
                            Calculate that shit
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                >
                    {answer.fte &&
                        <Typography color={'textPrimary'} variant="h3" component="h2">
                            {answer.fte} FTE
                        </Typography>
                    }
                    {answer.remainder && <Typography color={'textPrimary'} variant="h3" component="h2">
                        {answer.remainder}
                    </Typography>
                    }
                </Grid>
            </Grid>
        </Container>
    )
}
