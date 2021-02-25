import React, {useContext} from 'react'
import {Context} from './pageContext.js'
import { Link } from 'react-router-dom'
import './Styles/MovieList.css'

function MovieList () {
    const { movies, setMovieId } = useContext(Context);
    return (
        <div className="movielist-container">
        {movies.filter(movie => movie.poster_path).map(movie => (
         
            
        <Link to={`/movies/${movie.id}`} key={movie.id} onClick={()=>(setMovieId(movie.id))}>
        <div className="movies-container">
                <img className="movies-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    />
                <div className="movies-description">
                        <h3 className="movies-title">{movie.title}</h3>
                        <p>({movie.release_date})</p>
                        </div>
                </div>
        </Link>
        
        )
        )
        }
        </div>
        
) }

export default MovieList