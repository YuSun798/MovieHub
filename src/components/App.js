import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      //updates our state object
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      //dispatch another action with the type SEARCH_MOVIES_SUCCESS that updates our state object making loading=false and movies = action.payload where the payload is the movies array gotten from OMDB.
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

//the second hooks API: useEffect
    /*
    useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined
    perform side effects as data fetching, subscriptions, and manual DOM manipulations
    */
   //after 1st render componentDidMount and every update componentDidUpdate

   /* useEffect 相当于：
   // for class components
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          document.title = `You clicked ${this.state.count} times`;
        }
      }

  // using hooks it will become
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]); // Only re-run the effect if count changes
   */
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
        
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
        	});
      	});
  	}, []);

    const search = searchValue => {
    	dispatch({
      	type: "SEARCH_MOVIES_REQUEST"
    	});
	
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      	.then(response => response.json())
      	.then(jsonResponse => {
        	if (jsonResponse.Response === "True") {
          	dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
          	});
        	} else {
          	dispatch({
                type: "SEARCH_MOVIES_FAILURE",
                error: jsonResponse.Error
          	});
          }
      	});
	  };

    const { movies, errorMessage, loading } = state;

    return (
    <div className="App">
      <Header text="MOVIE HUB" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;