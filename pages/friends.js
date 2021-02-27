import React from "react";
import Head from "next/head";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Page from "../components/page";
import Label from "../components/label";

const useStyles = makeStyles({
    description: {
        margin: "0rem",
        textAlign: "left",
        marginLeft: "-3.5px"
    }
});

export default function Friends() {
    const classes = useStyles();
    return (
        <Page>
            <Head>
                <title>My Friends - cuso4-5h2o</title>
            </Head>
            <div>
                <Button href="/" color="default" startIcon={<ArrowBackIcon />}>Home</Button>
            </div>
            <div className="item-container">
                <h4 className="item-title">Friends</h4>
                <Grid container wrap="nowrap" spacing={1} direction="column" alignItems="stretch">
                    <Grid item>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
                                    <Grid item>
                                        <img className="item-icon" src="/images/avators/little_hong_.png" />
                                    </Grid>
                                    <Grid item>
                                        <Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
                                            <h4 className="item-title">Little_Hong_</h4>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="https://dh.ix.tc" target="_blank" rel="noopener">Visit His Blog</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div className="item-container">
                <h4 className="item-title">This Site</h4>
                <Card variant="outlined">
                    <CardContent>
                        <div className="article-container">
                            <b>Name:</b> cuso4-5h2o<br />
                            <b>Link:</b> <a href="https://www.cuso4.me">https://www.cuso4.me</a><br />
                            <b>Avator:</b> <a href="https://www.cuso4.me/images/avators/cuso4-5h2o.png">https://www.cuso4.me/images/avators/cuso4-5h2o.png</a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Page>
    )
}
