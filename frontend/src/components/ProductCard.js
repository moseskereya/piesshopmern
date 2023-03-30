import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

export default function ImgMediaCard(props) {
    const recipe = props.recipe;
    return (
      <div>
            <Card sx={{ maxWidth: 400, width: 350, m: 1 }}>
              <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={recipe.imgUrl}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {recipe.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {recipe.price} USD 
            </Typography>
            </CardContent>
            <CardActions>
                    <Button size="small">Share</Button>
                    <Link to={`recipe/${recipe._id}`}>
                         <Button size="small">Learn More</Button>
                    </Link>
            </CardActions>
        </Card>
      </div>
  );
}