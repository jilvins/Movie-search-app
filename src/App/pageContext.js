import React, {useState, useEffect} from 'react'
import axios from "axios";

const Context = React.createContext()


function ContextProvider ({children}) {
    const [data, setData] = useState()
    const [query, setQuery] = useState("Star Wars")
    const [movies, setMovies] = useState([]);
    const [singlMovie, setSinglMovie] = useState([])
    const [movieId, setMovieId] = useState()
    const [mostPopular, setMostPopular] = useState()
    const [trending, setTrending] = useState()

    const searchMovies = async (e) => {
        e.preventDefault();
        setMovies(data.results);
         }
    const seeMostPopular = async (e) => {
          e.preventDefault();
          setMovies(mostPopular.results);
           }
    const seeTrending = async (e) => {
            e.preventDefault();
            setMovies(trending.results);
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
      useEffect(() => {
        axios
          .get(`https://api.themoviedb.org/3/discover/movie?api_key=2407e5e42786f27ff63fbdfeb4a66fdb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
          .then((response) => setMostPopular(response.data))
          .catch((error) => console.log(error));
      }, []);
      useEffect(() => {
        axios
          .get(`https://api.themoviedb.org/3/trending/all/day?api_key=2407e5e42786f27ff63fbdfeb4a66fdb`)
          .then((response) => setTrending(response.data))
          .catch((error) => console.log(error));
      }, []);


      
    

      return (
        <Context.Provider value={{data, query, movies, singlMovie, mostPopular, setMovieId, setQuery, searchMovies, seeMostPopular, seeTrending}}>
        {children}
        </Context.Provider>
      )

}

export {ContextProvider, Context}

