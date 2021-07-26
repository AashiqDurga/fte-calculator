import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { AppBar, Box, Button, makeStyles, Tab, Tabs, TextField, Typography } from '@material-ui/core'
import { Calculate } from 'CalculatorService';
import logo from './assets/logo.png'
import { GiphyFetch } from "@giphy/js-fetch-api";
import PropTypes from 'prop-types';
import {
    Gif
} from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import BasicTable from './Table';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Calculator() {
    const classes = useStyles();
    const [hours, setHours] = useState("");
    const [answer, setAnswer] = useState({ fte: "", remainder: "" });
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    <AppBar position="static" color="transparent" elevation={0}>
                        <Tabs value={value} onChange={handleChange} aria-label="Data tabs" variant="fullWidth" centered>
                            <Tab label="Calculator" {...a11yProps(0)} />
                            <Tab label="Table" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TabPanel value={value} index={0}>
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
                            item
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
                    </TabPanel>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TabPanel value={value} index={1}>
                        <BasicTable/>
                    </TabPanel>
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
