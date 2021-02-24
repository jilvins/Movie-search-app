import React from "react";
import "./index.css"
import MovieSearch from './MovieSearch.js'
import Movie from './Movie.js'
import { Switch, Route } from 'react-router-dom'



export default function App () {
  
    return (
        <Switch>
            <Route exact path="/">
            <MovieSearch />
            </Route>
            <Route path='/movies/:id' children={<Movie />} />
        </Switch>
    )
    
}