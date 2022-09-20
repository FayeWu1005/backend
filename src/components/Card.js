import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export const MyCard = ({
  item = {},
  onClickAnalysis = () => {},
  analysisData = {},
  id,
}) => {
  const [show, setShow] = useState(false);
  const { type } = analysisData || {};

  return (
    <Grid item xs={6} key={id}>
      <Card sx={{ minHeight: 350 }}>
        <CardMedia
          className="news-img"
          component="img"
          alt={item.title}
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.creator}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            underline="none"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            spacing={2}
          >
            <Button size="small">Learn More</Button>
          </Link>

          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              onClickAnalysis(item.title);
              setShow((prev) => !prev);
            }}
          >
            Analysis
          </Button>
        </CardActions>
      </Card>
      {/* {type && <span>{type}</span>} */}
      {show && <span>{type}</span>}
    </Grid>
  );
};
