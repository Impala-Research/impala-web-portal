import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Member from "./Member/Member";
import Vesna from "../../../Assets/vesna-kuzmanovic.png";
import Tamara from "../../../Assets/Tamara.png";
import Ognen from "../../../Assets/ognen-spasovski-image.png";
import Igor from "../../../Assets/igor@2x.png";
import Ljupco from "../../../Assets/ljupco-kocarev-image.png";
import Dragan from "../../../Assets/Dragan.png";
import "./Team.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "160px 0px 160px 0px ",
    backgroundColor: "#F9F1E9",
  },
  root1: {
    padding: "100px 120px 100px 120px ",
    backgroundColor: "#ffffff",
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
    <div className="Team">
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
      <div className={classes.root1}>
        <Grid container>
          <Grid item xs={12} sm={3}>
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
                  title1="R&D"
                  text="Tamara is the lead of R&D in IMPALA and an experienced team leader in the field of bioinformatic sciences (which most of our innovative solutions are based on). Tamara’s contribution to IMPALA covers several areas: based on her expertise she is responsible for ICT (Information and Communication Technology) at IMPALA as well as the whole architecture of the platform.

                Thanks to her experience in the field of social entrepreneurship and education, Tamara also contributes to defining the vision of IMPALA in a responsible way."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper1}>
                <Member
                  png={Ognen}
                  title="Ognen Spasovski"
                  title1="DEO"
                  text="Ognen, DEO at IMPALA, is an expert an consultant for Adult Education as well as an associate professor for evolution psychology. As such he is engaged with questions such as: What are the reasons for specific human and consumer behavior? Is it provoked only be external stimuli or is it genetically preordered? What has the human species developed throughout evolution? And what patterns have we developed in order to survive?

                At IMPALA, Ognen supports us with his know-how and learnings from over 15 years to interpret repsondents’ data and outcome, and to advance our consultancy services for you.
                "
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
                  title="Igor Delov"
                  title1="UX Designer"
                  text="We understand IMPALA platform not just as a service you can buy, but as an ongoing process which is regularly advanced based on your feedback.

                That’s where Igor comes in. Igor is an experienced designer with successful projects all over Europe and responsible for product development.
                
                If you are already a user and want to share your feedback, please contact us here."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper1}>
                <Member
                  png={Ljupco}
                  title="Ljupco Kocarev"
                  title1="VP of R&D"
                  text="Ljupco acts as VP of R&D at IMPALA. He is an experienced research scientist as well as a professor at the ICT Faculty. Ljupco has donated his impressiv career to the research of Computer Science and Engineering as well as Information Technologies. He gained a lot of experiences in Europe as well as in US where he worked at the universities of Berkeley and San Diego in California.

                At IMPALA he supports us with his great experience in ICT and in Research and Development."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper1}>
                <Member
                  png={Dragan}
                  title="Dragan Nakevski"
                  title1="CTO"
                  text="Dragan is the acting CTO and responsible for driving the technological advancements of IMPALA.
                Based on his strong experience in building, designing and architecting information systems he is dedicated in moving IMPALA in continuous improvement and keeping it up to date with the latest technological trends and customers’ needs."
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
