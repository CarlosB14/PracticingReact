import React from "react"
export function ListOfMovies ( {movies} ) {
    return (
        <>
        {movies &&
          movies.map((movie) => (
            <article key={movie.imdbID} className="movie">
                <h2>{movie.Title}</h2>
                <p>{movie.year}</p>
                <img src={movie.Poster} alt={movie.Title} />
            </article>
          ))
        }
        </>
    )
}
