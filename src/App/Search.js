import React, {useContext} from 'react'
import {Context} from './pageContext.js'
import MovieList from './MovieList.js'

function Search () {
    const { searchMovies, query, setQuery, movies } = useContext(Context);

    return (

        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie title</label>
            <input className="input" type="text" name="query"
                placeholder="Type your movie title"
                value={query} onChange={(e) => setQuery(e.target.value)}/>  
            <button className="button" type="submit">Search</button>
        </form>
        
          
    )
}

export default Search