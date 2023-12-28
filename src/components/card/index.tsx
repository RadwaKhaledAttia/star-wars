import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useStyles from "./style";

interface Props {
    character: any;
    handleClick: (url: string) => void
}

const CardComponent:FC<Props> = ({ character, handleClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer} onClick={() => handleClick(character.url)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200/300"
          alt="war stars"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="h6" component="div">
            Click to see more details
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
