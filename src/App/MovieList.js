import React, {useContext} from 'react'
import {Context} from './pageContext.js'
import { Link } from 'react-router-dom'

function MovieList () {
    const { movies, setMovieId } = useContext(Context);
    return (
        <div>
        {movies.filter(movie => movie.poster_path).map(movie => (
         
            
        <Link to={`/movies/${movie.id}`} key={movie.id} onClick={()=>(setMovieId(movie.id))}>
        <div className="movie-container">
                <img className="movie-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    />
                <div className="movie-description">
                        <h3 className="movie-title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        </div>
                </div>
        </Link>
        )
        )
        }
        </div>
) }

export default MovieList