import React, {useState, useEffect} from 'react'
import axios from "axios";

const Context = React.createContext()


function ContextProvider ({children}) {
    const [data, setData] = useState()
    const [query, setQuery] = useState("Star Wars")
    const [movies, setMovies] = useState([]);
    const [singlMovie, setSinglMovie] = useState([])
    const [movieId, setMovieId] = useState(11)

    const searchMovies = async (e) => {
        e.preventDefault();
        setMovies(data.results);
         }
    

    useEffect(() => {
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=2407e5e42786f27ff63fbdfeb4a66fdb&language=en-US&query=${query}&page=1&include_adult=false`)
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));
      }, [searchMovies]);

      useEffect(() => {
        axios
          .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2407e5e42786f27ff63fbdfeb4a66fdb&language=en-US`)
          .then((response) => setSinglMovie(response.data))
          .catch((error) => console.log(error));
      }, [movieId]);

      
    

      return (
        <Context.Provider value={{data, query, movies, singlMovie, setMovieId, setQuery, searchMovies}}>
        {children}
        </Context.Provider>
      )

}

export {ContextProvider, Context}

