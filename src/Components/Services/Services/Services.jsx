import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import ServicesSection1 from "../ServicesSection1/ServicesSection1";
import ServicesSection2 from "../ServicesSection2/ServicesSection2";
import ServicesSection3 from "../ServicesSection3/ServicesSection3";
import ServicesSection4 from "../ServicesSection4/ServicesSection4";
import ServicesSection5 from "../ServicesSection5/ServicesSection5";
import TableList1 from "../ServicesSection2/TableList/TableList1";
import TableList2 from "../ServicesSection2/TableList/TableList2";
import TableList3 from "../ServicesSection2/TableList/TableList3";
import TableList4 from "../ServicesSection2/TableList/TableList4";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 0px 0px 0px ",
    backgroundColor: "#F9F1E9",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ServicesSection1
            title="Eye Tracking"
            text="Eye Tracking is a technology that allows you to understand what a person is really looking at while watching advertising, viewing design layouts, browsing a website, etc. It is the most objective method to measure consumers’ attention."
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ServicesSection2 title="How it Works" />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TableList1
                title1="With eye tracking you can "
                title2="Detect"
                text1="Where the sight is focused"
                text2="What is the users gaze pattern"
                text3="Which element is seen first, second, third etc."
                text4="How long is the user's eye focused on specific Area of interest (AOI)"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TableList2
                title1="With eye tracking you can "
                title2="Test"
                text1="Video materials"
                text2="Live Websites (UX/UI)"
                text3="Images (print ads, online banners, etc.)"
                text4="Packages/product concept"
                text5="Product shelf placement"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ServicesSection3
            title="Eye Tracking on Impala"
            text="On IMPALA, the eye tracking technology is fully integrated with other neuromarketing technologies. It allows you to cross-analyze consumers’ explicit responses with their non-conscious reactions and get the most reliable insights. The eye tracking technology is fully automated. Eye tracking studies are mainly using a computer webcam to detect data. Please note that the accuracy of the webcam-based eye tracking results depends on the webcam resolution."
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <ServicesSection4
            title="Emotional recognition through face"
            text="Emotional Recognition through face Emotions define how we feel about certain things, facial expressions are the most obvious way to show those feelings. However, identifying human emotions in digitalization has always been a challenge – as a solution the implicit technique Emotional Recognition through face systems have been developed."
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ServicesSection2
            title="How it Works"
            text="Based on Paul Eckman’s study (please link to a source), there are 68 dots detected on every human face. Different sets of these dots (points) can be recognized as different emotions."
          />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TableList3
                title1="FER aims to detect
                and recognize "
                title2="SEVEN CORE EMOTIONS"
                text1="Joy"
                text2="Fear"
                text3="Sadness"
                text4="Neutral"
                text5="Surprise"
                text6="Disgust"
                text7="Anger"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TableList4
                title1="With emotional recognition
                you can easily "
                title2="TEST"
                text1="Video materials"
                text2="Images of people, brands and products"
                text3="Music"
                text4="Editorial copy (especially fake news)"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ServicesSection3
              title="Emotional recognition on Impala"
              text="IMPALA has a module based on the philosophy of Paul Eckman (link again to source): through a web camera, IMPALA detects face dots and recognizes emotions. (Those emotions are provoked by stimuli that have been uploaded to the platform and are shown to the users.)
As soon as the respondent reacts IMPALA recognizes the exact time of the appearance of the emotion, connects it with specific stimuli and delivers valuable data to you."
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ServicesSection1
              title="IAT - Test of Implicit Associations"
              text="Your customers or/and target groups have only limited access to their own thoughts and preferences. Also, traditional research methods are limited in developing deeper insights. As a result, market researchers across the globe embrace research methods that explore the subconscious depths of the customer’s mind. The Implicit Association Test is such a method and allows you to go deeper by measuring the strength of mental associations."
            />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <ServicesSection5
                  title="How it works"
                  text="The base of IAT is to measure the time of a reaction to specific stimuli. Why? Because our brain requires more time to act upon incongruent thoughts than something we find logical straight away. Therefore, the associative strength can be calculated as reaction time difference between blocks."
                  title1="IAT on Impala"
                  text1="(can we add 1 sentence how it works on IMPALA)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableList2
                  title1="With eye tracking you can "
                  title2="Test"
                  text1="Video materials"
                  text2="Live Websites (UX/UI)"
                  text3="Images (print ads, online banners, etc.)"
                  text4="Packages/product concept"
                  text5="Product shelf placement"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <ServicesSection4
              title="Emotional recognition through face"
              text="Emotional Recognition through face Emotions define how we feel about certain things, facial expressions are the most obvious way to show those feelings. However, identifying human emotions in digitalization has always been a challenge – as a solution the implicit technique Emotional Recognition through face systems have been developed."
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <ServicesSection5
              title="How it works"
              text="The base of IAT is to measure the time of a reaction to specific stimuli. Why? Because our brain requires more time to act upon incongruent thoughts than something we find logical straight away. Therefore, the associative strength can be calculated as reaction time difference between blocks."
              title1="IAT on Impala"
              text1="(can we add 1 sentence how it works on IMPALA)"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TableList2
              title1="With eye tracking you can "
              title2="Test"
              text1="Video materials"
              text2="Live Websites (UX/UI)"
              text3="Images (print ads, online banners, etc.)"
              text4="Packages/product concept"
              text5="Product shelf placement"
            />
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
            <ServicesSection1
              title="Traditional Market Research tools"
              text="Implicit research techniques are highly advanced in detecting behavior, from a human and consumer perspective. However, they have no capacity to discover the reasons behind such as…
              We from IMPALA strongly believe that those reasons behind are equally important as advanced data on human behavior. Therefore, we offer validated tools developed and implemented in classical explicit research methodologies that are designed to complement all neuromarketing tools, available on IMPALA."
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ServicesSection2 title="How it Works" />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <TableList1
                  title1="With eye tracking you can "
                  title2="Detect"
                  text1="Where the sight is focused"
                  text2="What is the users gaze pattern"
                  text3="Which element is seen first, second, third etc."
                  text4="How long is the user's eye focused on specific Area of interest (AOI)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TableList2
                  title1="With eye tracking you can "
                  title2="Test"
                  text1="Video materials"
                  text2="Live Websites (UX/UI)"
                  text3="Images (print ads, online banners, etc.)"
                  text4="Packages/product concept"
                  text5="Product shelf placement"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
