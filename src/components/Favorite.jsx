import React,{useState, useEffect} from 'react'
import Header from './Header';
import './favorite.css'
import Footer from './Footer';
import {useStateValue} from './StateProvider'
import Movie from './Movie';
import Typography from '@mui/material/Typography';


const Favorite = () => {
 
    const [{favorite}, dispatch] = useStateValue()
    console.log(favorite)
    return ( 
        <div className="favorite">
                <Header/> 
                <div className="home__movie__container">
                {favorite.length > 0 ? favorite.map(movie => (
                    <Movie 
                    desc={movie.desc} 
                    title={movie.title} 
                    imgUrl={movie.imgUrl} 
                    releaseDate={movie.release_date}
                    adult={movie.adult}
                    language={movie.language}
                    rating={movie.rating}
                    img2Url={movie.imgUrl}
                    />      
                )): 
                <div>
                      <div className="errorMsg">
                 No Movies are added to your favorites.
            </div>
                </div>
                }
                </div>
        </div>
    )
}

export default Favorite
