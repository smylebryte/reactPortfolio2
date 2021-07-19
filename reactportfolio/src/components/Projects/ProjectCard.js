import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 3,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProjectCard({ title, link, description }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        {/* <Typography variant="h5" component="h2">
          {link}
        </Typography> */}
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{link}</Button>
      </CardActions>
    </Card>
  );
}

// function ProjectCard(props) {
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Link href="#">{link}</Card.Link>
//         </Card.Body>
//       </Card>
//       ;
//     </>
//   );
// }

// export default ProjectCard;
