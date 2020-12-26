import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import theme from "./../../theme/theme";
import * as styles from "../../theme/commonStyles";

const SkillsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      backgroundColor: "#e8e8e8",
      margin: "0 auto",
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    rowDivider: {
      width: "70%",
    },
    divider: {
      ...styles.divider,
    },
    headerText: {
      ...styles.headerText,
    },
    skillsText: {
      marginTop: "2rem",
    },
    listItemText: {
      color: "black",
      fontSize: "1.2rem",
    },
    bottomText: {
      color: "black",
      fontSize: "1.2rem",
      margin: "0.5rem",
      marginBottom: "2rem",
    },
    icon: {
      color: "black",
      fontSize: "2rem",
    },
  });
  const classes = useStyles();

  const secondHalfList = (
    <div>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-dot-net-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Academic studies"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-dot-net-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Languages: English, Kannada, Sanskrit, Hindi"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-dot-net-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Music: Singing, dancing, playing piano & other musical instruments."
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-dot-net-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Sports: Cricket, Soccer, Kabaddi"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
    </div>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography
        className={`${classes.skillsText} ${classes.headerText}`}
        align="center"
      >
        My Skills
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={`${classes.rowDiv} ${classes.rowDivider}`}>
        <Box className={classes.columnDiv}>
          <List>{secondHalfList}</List>
        </Box>
      </Box>
      <Typography align="center" className={classes.bottomText}>
        <span style={{ fontWeight: "bold" }}>Currently learning: </span>
        Bhagavat Geeta Parayana
      </Typography>
    </Box>
  );
};

export default SkillsPage;
