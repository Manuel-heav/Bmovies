import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './movie.css'
const Movie = ({imgUrl, title, desc}) => {
    return (
        <div className="movie">
            <Card sx={{ maxWidth: 500}}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={imgUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="movie__desc">
                    {desc.split("").length > 200 ? desc.split("").slice(0, 200).join("")+"..." : desc}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
      </div>
    )
}

export default Movie
