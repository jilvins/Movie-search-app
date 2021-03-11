import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from './pageContext.js'
import './Styles/Movie.css'

function Movie () {
    
    const { singlMovie} = useContext(Context);
    return (
        <div className="single-movie">
                <div>
                <img className="movie-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${singlMovie.poster_path}`}
                    alt={singlMovie.title + ' poster'}
                    />
                    <p className="movie-info">Release date: {singlMovie.release_date}</p>
                    <p className="movie-info">Rating: {singlMovie.vote_average}</p>
                </div>
                <div className="movie-description">
                        <h3 className="movie-title">{singlMovie.title}</h3>
                        <p className="movie-info">{singlMovie.overview}</p>
                       {singlMovie.genres ? <div className="movie-genre">
                        {singlMovie.genres.map(genre => (
                        <p >{genre.name}</p>
                       ))}  
                        </div> : null }
                        <Link to='/' id='btn'>
                        back to the list
                        </Link>
                        </div>
                       
                        
                        
              
    </div>
    ) 
    
}

export default Movie