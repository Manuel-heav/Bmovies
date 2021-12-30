import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './movie.css'
import SelectedMovie from './SelectedMovie';
import { toUnitless } from '@mui/material/styles/cssUtils';
const Movie = ({imgUrl, title, desc, img2Url, releaseDate, adult, language, rating}) => {
    return (
        <div className="movie">
            <figure class="snip1218">
                <div class="image"><img src={img2Url} alt="sample70"/>
                    <p>
                    {desc.split("").length > 180 ? desc.split("").slice(0, 180).join("")+"..." : desc}
                    </p>
                </div>
                <figcaption>
                    <h3><span>{title}</span></h3>
                    <p>Rating: {rating}</p>
                    <SelectedMovie imgUrl={imgUrl} title={title} desc={desc} img2Url={img2Url} releaseDate={releaseDate} adult={adult} language={language} rating={rating}/>
                </figcaption>
            </figure>
       
{/* 
            <div className="movie__container">
                <img src={imgUrl} alt="Movie Thumbnail" className="movie_thumbnail"/>
                <div className="movie__text__container">
                    <h2 className="movie__title">{title}</h2>
                    <p className="movie__description">{desc.split("").length > 200 ? desc.split("").slice(0, 200).join("")+"..." : desc}</p>
                    <SelectedMovie imgUrl={imgUrl} title={title} desc={desc} img2Url={img2Url} releaseDate={releaseDate} adult={adult} language={language} rating={rating}/>
                </div>
            </div> 
             <Card sx={{ maxWidth: 500}}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={imgUrl}
                alt="green iguana"
            />
            <CardContent className="movie__content">
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="movie__desc">
                    {desc.split("").length > 200 ? desc.split("").slice(0, 200).join("")+"..." : desc}
                </Typography> 
            </CardContent>
            </CardActionArea>
        </Card>  */}
        </div>
    )
}

export default Movie
