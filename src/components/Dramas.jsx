import React,{useState, useEffect} from 'react'
import Header from './Header';
import Movie from './Movie';
import './dramas.css'

const Dramas = () => {
    const [movies, setMovies] = useState([]);
    const api_key = "api_key=9f02a73a699c175c26914cfc4ef6968e"
    const base_url = "https://api.themoviedb.org/3"
    const base_img_url = "https://image.tmdb.org/t/p/w500/"
    const API_URL = base_url + "/discover/movie?with_genres=18&primary_release_year=2014&"+api_key 
    useEffect(()=>{
      fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
    }, [API_URL])
    return ( 
        <div className="dramas">
                <Header/>
            <div className="home__movie__container">
            {
                movies.map((movie) => (
                    <Movie 
                    desc={movie.overview} 
                    title={movie.original_title} 
                    imgUrl={base_img_url+movie.poster_path} 
                    releaseDate={movie.release_date}
                    adult={movie.adult}
                    language={movie.original_language}
                    rating={movie.vote_average}
                    img2Url={base_img_url+movie.backdrop_path}
                    /> 
      ))
     }
     </div>
        </div>
    )
}

export default Dramas
