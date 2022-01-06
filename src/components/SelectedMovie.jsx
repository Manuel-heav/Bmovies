import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@mui/material';
import './selectedMovie.css'
import { FiX } from 'react-icons/fi';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import {useStateValue} from './StateProvider'
import './selectedMovie.css'
const SelectedMovie = ({imgUrl, title, desc, img2Url, releaseDate, adult, language, rating}) => {
    const [open, setOpen] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("")
    const [clicked, setClicked] = useState(false)
    const [{favorite}, dispatch] = useStateValue()
    const handleClose = () => setOpen(false);
    const opts = {
        height: '400',
        width: '90%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleOpen = () => {
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(title || "")
            .then((url) => {
                const properUrl = url.slice(32)
                setTrailerUrl(properUrl)
            }).catch((err) => console.log(err))
        }
        setOpen(true)
    };
    
        const addToFavorite = () => {
            // Adding to favorites
            dispatch({
                type: 'ADD_TO_FAVORITE',
                item: {
                    title: title,
                    imgUrl: imgUrl,
                    desc: desc,
                    releaseDate: releaseDate,
                    adult: adult,
                    language: language,
                    rating: rating
                }
            })

            alert("Movie added to favorites successfully")
            setClicked(true)
        }
        const removeFromFavorite = () => {
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id: title,
            })
            alert("Movie removed from favorites successfully")
            setClicked(false)
        }
    return (
        <div>
        <Button onClick={handleOpen} style={{color: "#fff", fontWeight: "bold", margin: "20"}}>More</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box className="container">
        <FiX className="close__btn" onClick={handleClose}/> 
        <CardMedia
                className="img"
                component="img"
                image={imgUrl}
                alt="green iguana"
            />
            <div className="text__container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                 {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {desc}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Rating: {rating}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Adult Rated: {adult.toString()}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Release Date: {releaseDate}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Language: {language}
            </Typography>
                {
                    clicked ? 
                    <Button className="fav__btn" onClick={removeFromFavorite} variant="contained">Remove from favorites</Button>
                    :
                    <Button className="fav__btn" onClick={addToFavorite} variant="contained">Add to favorites</Button>
                    }
            </div>
             <Typography  id="modal-modal-title" variant="h4" component="h2" className="movie__title">
                Movie Trailer
            </Typography> 
              <Youtube videoId={trailerUrl} opts={opts} className="video"/>

      </Box>
    </Modal>
  </div>
    )
}

export default SelectedMovie
