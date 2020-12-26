import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/picture.png";

import SkillsPage from "./SkillsPage";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      margin: "0 auto",
    },
    headerText: {
      ...styles.headerText,
    },
    aboutText: {
      marginTop: "6rem",
    },
    divider: {
      ...styles.divider,
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "1rem",
      lineHeight: "1.6rem",
    },
    link: {
      color: "black",
      textShadow: "1px 1px #1e6cae",
      textDecoration: "none",
      borderBottom: "1px solid #1e6cae",
      "&:hover": {
        color: "#1e6cae",
        cursor: "pointer",
      },
    },
    picture: {
      maxHeight: "100%",
      maxWidth: "100%",
      margin: "1rem",
      marginBottom: "6rem",
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
      boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
    },
  });
  const classes = useStyles();

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="AboutMe">
        <Typography className={`${classes.aboutText} ${classes.headerText}`}>
          About Me
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography className={classes.bodyText}>
          My name is <b>Pranav Shiraguppi</b>. I am studying in 6th grade. I go
          to "Purnapramati" school in Bangalore, India. I really enjoy learning
          & singing Indian devotional songs. I love to be always learning
          something new. I spend much of my free time playing with friends,
          reciting songs, watching cartoons etc.
          {/* TODO - add resume link */}{" "}
          <Link
            onClick={scrollToContact}
            className={classes.link}
            underline="none"
          >
            contact information and links here
          </Link>
          .
        </Typography>
        <Box
          component="img"
          src={picture}
          alt="Pranav Shiraguppi"
          className={classes.picture}
        />
      </Box>
      <SkillsPage />
    </div>
  );
};

export default AboutPage;
