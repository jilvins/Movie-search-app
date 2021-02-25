import React, {useContext} from 'react'
import {Context} from './pageContext.js'
import './Styles/Search.css'
import Logo from '../pictures/1_vIR7iO-1GnY2xYxL6NiYkw.png'

function Search () {
    const { searchMovies, query, setQuery, seeMostPopular, seeTrending } = useContext(Context);

    return (
        <div className="search-container">
            <div>
            <img src={Logo} alt="movie database logo" className="db-logo"/>
            </div>
        <div className="form-container">
        <form className="form" onSubmit={searchMovies}>
            <input className="input" type="text" name="query"
                placeholder="Type your movie title"
                value={query} onChange={(e) => setQuery(e.target.value)}/>  
            <button className="button" type="submit">Search</button>
        </form>
        </div>
        <div className="ready-list">
            <button onClick={seeMostPopular} className="list-btn">
                Most popular movies
            </button>
            <button onClick={seeTrending} className="list-btn">
                See whats trending
            </button>
        </div>
       
        </div>
       
          
    )
}

export default Search