import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
  Tooltip,
  makeStyles,
  Zoom,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

const ContactPage = () => {
  const useStyles = makeStyles({
    mainDiv: {
      backgroundColor: "rgba(0, 0, 0, 0.92)",
      position: "relative",
      bottom: "0",
      marginTop: "5rem",
    },
    columnDiv: {
      ...styles.columnDiv,
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    headerText: {
      ...styles.headerText,
    },
    contactText: {
      color: "#eeeeee",
      margin: "0.5rem",
      textShadow: "0.1rem 0.1rem #4f4f4f",
    },
    divider: {
      ...styles.divider,
    },
    contactDivider: {
      backgroundColor: "#eeeeee",
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      margin: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        margin: "0.1rem",
      },
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    twitter: {
      fontSize: "2.6rem",
    },
    youtube: {
      fontSize: "3rem",
    },
  });
  const classes = useStyles();

  const icons = (
    <Box className={classes.rowDiv} id="Contact">
      <Tooltip title="YouTube" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="YouTube link"
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCSCQKQOVcaaLXeoZxXcK3Mg"
            )
          }
        >
          <YouTubeIcon className={classes.youtube} />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography className={`${classes.headerText} ${classes.contactText}`}>
        Contact Me
      </Typography>
      <Divider
        classes={{ root: `${classes.divider} ${classes.contactDivider}` }}
      />
      <Box className={classes.rowDiv}>
        <Typography className={classes.emailText}>Email:&nbsp;</Typography>
        <Link href="mailto:pranavshiraguppi@gmail.com" className={classes.link}>
          pranavshiraguppi@gmail.com
        </Link>
      </Box>
      {icons}
    </Box>
  );
};

export default ContactPage;
