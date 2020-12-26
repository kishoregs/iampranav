import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import theme from "../theme/theme";
import ReactPlayer from "react-player";

const Project = (props) => {
  const useStyles = makeStyles({
    card: {
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "75%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    title: {
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "1rem",
    },
    button: {
      color: "#f2eeeef7",
      margin: "0.5rem",
      backgroundColor: "#1e6cae",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      "&:hover": {
        backgroundColor: "#1e6cae",
      },
    },
    buttonDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
      height: "100%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
    },
    text: {
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Card className={classes.card}>
        {/* <CardActionArea onClick={() => window.open(props.projectLink)}> */}
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title}>{props.title}</Typography>
            {props.icons}
            <Typography className={classes.text}>
              {props.description}
            </Typography>
            <CardMedia title={props.imageTitle}>
              <ReactPlayer url={props.url} playing width="100%" height="100%" />
            </CardMedia>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Box className={classes.buttonDiv}>
            <Button
              className={classes.button}
              onClick={() => window.open(props.projectLink)}
            >
              Try it
            </Button>
            <Button
              className={classes.button}
              onClick={() => window.open(props.githubLink)}
            >
              GitHub
            </Button>
          </Box>
        </CardActions> */}
      </Card>
    </Box>
  );
};

export default Project;
