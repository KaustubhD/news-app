import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "calc(33% - 20px)",
    margin: 10,
    backgroundColor: "#eee",
    flex: 1
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard({ news }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {news.source.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {news.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {news.author}
        </Typography>
        <Typography variant="body2" component="p">
          {console.log(news)}
          {
            /* {news.content && news.content.split(/[\.|\?|!]\s?\s[A-Z]/)[0] + "."}
          {!news.content &&
            news.description &&
            news.description.split(/\.\s/)[0] + "."} */
            news.description
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={news.url} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
