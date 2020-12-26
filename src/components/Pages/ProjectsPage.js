import React from "react";
import { Box, Typography, Divider, Icon, makeStyles } from "@material-ui/core";
import * as styles from "../../theme/commonStyles";
import Project from "./../Project";

const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      width: "auto",
    },
    headerText: {
      ...styles.headerText,
    },
    projectText: {
      marginTop: "5rem",
    },
    divider: {
      ...styles.divider,
    },
    projectsDivider: {
      paddingBottom: "0.15rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  const reactIcon = (
    <Icon
      className="devicon-react-original"
      fontSize="inherit"
      style={{ marginRight: "0.35rem" }}
    />
  );

  const reduxIcon = (
    <span
      className="iconify"
      data-icon="simple-icons:redux"
      data-inline="false"
      style={{ fontSize: "1.5rem", margin: "0 0.35rem" }}
    />
  );

  const javascriptIcon = (
    <Icon
      className="devicon-javascript-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const htmlIcon = (
    <Icon
      className="devicon-html5-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const cssIcon = (
    <Icon
      className="devicon-css3-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const materialUIIcon = (
    <span
      className="iconify"
      data-icon="simple-icons:material-ui"
      data-inline="false"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const toDoListIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const portfolioWebsiteIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {javascriptIcon}
      {materialUIIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const calculatorIcons = (
    <Box className={classes.icons}>
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const cssArtIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ marginRight: "0.35rem" }}
      />
      {cssIcon}
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="Projects">
      <Typography className={`${classes.projectText} ${classes.headerText}`}>
        Videos
      </Typography>
      <Divider className={`${classes.divider} ${classes.projectsDivider}`} />
      <Project
        title="Geeta Sara"
        description="A marvelous & breathtaking composition of SRI VYASARAJA GURU SARVABHOUMARU  that wholly holds the abstract of “ Bhagavadgeeta “ and spreads the message of  Sri Krishna's teachings."
        url="https://www.facebook.com/sameer.shiraguppi.9/videos/3607731425983842"
        imageTitle="Geeta Sara"
        projectLink="https://github.com/Pranavgs/catch-me-if-you-can"
        githubLink="https://github.com/Pranavgs/catch-me-if-you-can"
      />
      <Divider className={`${classes.divider} ${classes.projectsDivider}`} />
      <Project
        title="Dasara Pada"
        description="Raaga Composition and all Credits : Smt. Shilpa Mukunda Hunagund ( Pranava's Music Guru)."
        url="https://www.facebook.com/100002410607793/videos/1976075662482768/"
        imageTitle="Dasara Pada"
        projectLink="https://github.com/Pranavgs/catch-me-if-you-can"
        githubLink="https://github.com/Pranavgs/catch-me-if-you-can"
      />
    </Box>
  );
};

export default ProjectsPage;
