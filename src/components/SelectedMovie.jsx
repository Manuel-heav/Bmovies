import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@mui/material';
import './selectedMovie.css'
import { FiX } from 'react-icons/fi';


const SelectedMovie = ({imgUrl, title, desc, img2Url, releaseDate, adult, language, rating}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
        <Button onClick={handleOpen}>More</Button>
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
                image={img2Url}
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
            </div>
      </Box>
    </Modal>
  </div>
    )
}

export default SelectedMovie
