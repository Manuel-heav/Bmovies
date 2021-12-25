import React,{useEffect, useState} from 'react'
import Movie from './Movie'
import './home.css'
import Header from "./Header";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const api_key = "api_key=9f02a73a699c175c26914cfc4ef6968e"
    const base_url = "https://api.themoviedb.org/3"
    const base_img_url = "https://image.tmdb.org/t/p/w500/"
    const API_URL = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key 
    useEffect(()=>{
      fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
    }, [API_URL])
    console.log(movies)
    return (
        <div className="home">
            <Header/>
            <div className="home__movie__container">
            {
                movies.map((movie) => (
                    <Movie desc={movie.overview} title={movie.original_title} imgUrl={base_img_url+movie.poster_path}/>         
      ))
     }
     </div>
        </div>
    )
}

export default Home
