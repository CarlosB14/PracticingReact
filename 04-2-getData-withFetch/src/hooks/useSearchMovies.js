import { useState, useEffect } from "react"
const URL_MOVIES = `http://www.omdbapi.com/?apikey=7b63ad3e&s=`


export function useSearchMovies (title) {
  const [actualMovies, setActualMovies] = useState([])

  useEffect(() => {
    if(title) {
      getMovies()
        .then(data => {
        setActualMovies(data)
          })
    }
  }, [title])

  async function getMovies() {
    try {
      const res = await fetch(`${URL_MOVIES}${title}`)
      const moviesUrl = await res.json()
        return moviesUrl.Search || []
      }
    catch (e) {
        console.error('Error fetching movies:', e)
        return []
      }
  }
  return { actualMovies }
}