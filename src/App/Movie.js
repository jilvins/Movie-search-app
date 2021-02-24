import React, {useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import {Context} from './pageContext.js'

function Movie () {
    const { id } = useParams()
    const { singlMovie} = useContext(Context);
    return (
        <div className="single-movie">
            
                <img className="movie-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${singlMovie.poster_path}`}
                    alt={singlMovie.title + ' poster'}
                    />
                <div className="movie-description">
                        <h3 className="movie-title">{singlMovie.title}</h3>
                        <p><small>RELEASE DATE: {singlMovie.release_date}</small></p>
                        <p><small>RATING: {singlMovie.vote_average}</small></p>
                        <p className="movie-description">{singlMovie.overview}</p>
                        </div>
                        <button onClick={()=>{console.log(singlMovie)}}>
                            check api
                        </button>
                        
                        <Link to='/' className='btn'>
                        back to movies
                        </Link>
              
    </div>
    ) 
    
}

export default Movie