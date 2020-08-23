import React, { useState } from 'react'
import { ResultsCard } from './ResultsCard'

export const Add = () => {

    // this state stores the query search from the user 
    const [query, setQuery] = useState("")
    // stores the result from moviedb
    const [results, setresult] = useState([])

    const onChange = e => {
        e.preventDefault();

        const userInput = e.target.value
        setQuery(userInput)


        
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${userInput}`
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                !data.errors ? setresult(data.results) : setresult([])
            })
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">

                        {/* input for the user to search a movie */}
                        <input type="text" 
                        placeholder="Search for a movie"
                        value={query}
                        onChange={onChange}/>
                    </div>

                    {/* renders the list of movies  */}
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <ResultsCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}


                </div>
            </div>
        </div>
    )
}
