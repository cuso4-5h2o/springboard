import React from "react";
import Head from "next/head";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Page from "../components/page";
import Label from "../components/label";

const useStyles = makeStyles({
	description: {
		margin: "0rem",
		textAlign: "left",
		marginLeft: "-3.5px"
	}
});

export default function Index() {
	const classes = useStyles();
	return (
		<Page>
			<Head>
				<title>cuso4-5h2o</title>
			</Head>
			<div className="container">
				<div className="item-container">
					<Card variant="outlined">
						<CardContent>
							<Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
								<Grid item>
									<img className="product-icon" src="/images/avator.png" />
								</Grid>
								<Grid item>
									<Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
										<h4 className="item-title">cuso4-5h2o</h4>
									</Grid>
									<p className={classes.description}>OS:
macOS Big Sur & Ubuntu 20.04 LTS & Windows 10 2019 LTSC</p>
									<p className={classes.description}>IDE: JetBrains</p>
									<p className={classes.description}>Editor: Visual Studio Code</p>
									<p className={classes.description}>Languages: Go & Rust & C++ & Python & JavaScript</p>
									<p className={classes.description}>Tab: 4 spaces</p>
									<p className={classes.description}>Also interested in VOCALOID (Synthesizer V)</p>
								</Grid>
							</Grid>
						</CardContent>
						<CardActions>
							<Button size="small" href="https://blog.cuso4.me">My Blog</Button>
							<Button size="small" href="https://github.com/cuso4-5h2o">GitHub</Button>
						</CardActions>
					</Card>
				</div>
				<div className="item-container">
					<h4 className="item-title">Projects</h4>
					<Grid container wrap="nowrap" spacing={1} direction="column" alignItems="stretch">
						<Grid item>
							<Card variant="outlined">
								<CardContent>
									<Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
										<Grid item>
											<img className="product-icon" src="/images/products/pamphlet.png" />
										</Grid>
										<Grid item>
											<Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
												<h4 className="item-title">Pamphlet</h4>
												<Label className="item-label">Archived</Label>
											</Grid>
											<p className={classes.description}>Make feasible lists.</p>
										</Grid>
									</Grid>
								</CardContent>
								<CardActions>
									<Button size="small" href="https://pamphlet.cuso4.me">Project Site</Button>
									<Button size="small" href="https://github.com/cuso4-5h2o/pamphlet">Source Code</Button>
								</CardActions>
							</Card>
						</Grid>
						<Grid item>
							<Card variant="outlined">
								<CardContent>
									<Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
										<Grid item>
											<img className="product-icon" src="/images/products/protamine.png" />
										</Grid>
										<Grid item>
											<Grid container wrap="nowrap" spacing={1} direction="row" alignItems="flex-start">
												<h4 className="item-title">Protamine</h4>
												<Label className="item-label">Archived</Label>
											</Grid>
											<p className={classes.description}>A simple game.</p>
										</Grid>
									</Grid>
								</CardContent>
								<CardActions>
									<Button size="small" href="https://protamine.cuso4.me">Play Now</Button>
									<Button size="small" href="https://github.com/cuso4-5h2o/protamine">Source Code</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</div>
			</div>
		</Page >
	)
}
