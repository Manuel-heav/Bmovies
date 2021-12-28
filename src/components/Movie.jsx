import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './movie.css'
import SelectedMovie from './SelectedMovie';
const Movie = ({imgUrl, title, desc, img2Url, releaseDate, adult, language, rating}) => {
    const [eachMovie, setEachMovie] = useState([])
    const saveImage = (e) => {
       setEachMovie(eachMovie => [...eachMovie, e.target.src])
       console.log(eachMovie)
    }
    return (
        <div className="movie">
            <Card sx={{ maxWidth: 500}}  onClick={saveImage}>
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
                <SelectedMovie imgUrl={imgUrl} title={title} desc={desc} img2Url={img2Url} releaseDate={releaseDate} adult={adult} language={language} rating={rating}/>
            </CardContent>
            </CardActionArea>
        </Card>
      </div>
    )
}

export default Movie
