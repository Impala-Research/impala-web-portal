import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Member from "./Member/Member";
import Vesna from "../../../Assets/vesna-kuzmanovic.png";
import Tamara from "../../../Assets/Tamara.png";
import Ognen from "../../../Assets/ognen-spasovski-image.png";
import Igor from "../../../Assets/igor@2x.png";
import Ljupco from "../../../Assets/ljupco-kocarev-image.png";
import Dragan from "../../../Assets/Dragan.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "160px 0px 160px 0px ",
    backgroundColor: "#F9F1E9",
  },

  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  paper1: {
    padding: "70px",
    boxShadow: "none",
  },
}));

export default function Team() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" color="primary">
                About Us
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography color="secondary">
                As diverse as consumer behavior can be, as diverse is our team.
                We are team of psychologists, ICT experts, experts in
                bioinformatics as well as evolution psychology, data management,
                market research, design and statistics. Most of us have been
                working with universities across the globe and been involved in
                international award-winning market research and scientific
                projects. Sounds a bit nerdy? Well, we think so too – but it is
                exactly that passion that keeps us driving to break new grounds
                in consumer behavior. Thanks to our diverse passions we’ve
                developed new modules which detect with a 99% correctness the
                subconscious states of humans, as well as their drivers of their
                behavior (especially consumer behavior). The result IMPALA
                platform that can also enable you to break new grounds within
                our business.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {" "}
              <Typography variant="h6" color="primary">
                Meet our team here and learn about how they drive IMPALA:
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>

      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper1}>
              <Member
                png={Vesna}
                title="Vesna Kuzmanovic"
                title1="Chief Executive Officer"
                text="Vesna, CEO of IMPALA, is a problem solver and an expert in market research and innovation management with over 15 years of international experience. Vesna also acted as the Managing Director of the international GfK Group and is a serial entrepreneur.

                Her main drive throughout her varied career has always been to develop new innovative solutions by looking at a problem from various angles. An approach she also implemented with IMPALA. “The true value of great tools is an interdisciplinary approach – the point where technology meets psychology – or in the case of IMPALA: consumer behavior.”"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper1}>
              <Member
                png={Tamara}
                title="Tamara Dimitrova"
                title1="Chief Executive Officer"
                text="Vesna, CEO of IMPALA, is a problem solver and an expert in market research and innovation management with over 15 years of international experience. Vesna also acted as the Managing Director of the international GfK Group and is a serial entrepreneur.

                Her main drive throughout her varied career has always been to develop new innovative solutions by looking at a problem from various angles. An approach she also implemented with IMPALA. “The true value of great tools is an interdisciplinary approach – the point where technology meets psychology – or in the case of IMPALA: consumer behavior.”"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper1}>
              <Member
                png={Ognen}
                title="Vesna Kuzmanovic"
                title1="Chief Executive Officer"
                text="Vesna, CEO of IMPALA, is a problem solver and an expert in market research and innovation management with over 15 years of international experience. Vesna also acted as the Managing Director of the international GfK Group and is a serial entrepreneur.

                Her main drive throughout her varied career has always been to develop new innovative solutions by looking at a problem from various angles. An approach she also implemented with IMPALA. “The true value of great tools is an interdisciplinary approach – the point where technology meets psychology – or in the case of IMPALA: consumer behavior.”"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper1}>
              <Member
                png={Igor}
                title="Vesna Kuzmanovic"
                title1="Chief Executive Officer"
                text="Vesna, CEO of IMPALA, is a problem solver and an expert in market research and innovation management with over 15 years of international experience. Vesna also acted as the Managing Director of the international GfK Group and is a serial entrepreneur.

                Her main drive throughout her varied career has always been to develop new innovative solutions by looking at a problem from various angles. An approach she also implemented with IMPALA. “The true value of great tools is an interdisciplinary approach – the point where technology meets psychology – or in the case of IMPALA: consumer behavior.”"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper1}>
              <Member
                png={Ljupco}
                title="Vesna Kuzmanovic"
                title1="Chief Executive Officer"
                text="Vesna, CEO of IMPALA, is a problem solver and an expert in market research and innovation management with over 15 years of international experience. Vesna also acted as the Managing Director of the international GfK Group and is a serial entrepreneur.

                Her main drive throughout her varied career has always been to develop new innovative solutions by looking at a problem from various angles. An approach she also implemented with IMPALA. “The true value of great tools is an interdisciplinary approach – the point where technology meets psychology – or in the case of IMPALA: consumer behavior.”"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper1}>
              <Member
                png={Dragan}
                title="Vesna Kuzmanovic"
                title1="Chief Executive Officer"
                text="Vesna, CEO of IMPALA, is a problem solver and an expert in market research and innovation management with over 15 years of international experience. Vesna also acted as the Managing Director of the international GfK Group and is a serial entrepreneur.

                Her main drive throughout her varied career has always been to develop new innovative solutions by looking at a problem from various angles. An approach she also implemented with IMPALA. “The true value of great tools is an interdisciplinary approach – the point where technology meets psychology – or in the case of IMPALA: consumer behavior.”"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </>
  );
}
