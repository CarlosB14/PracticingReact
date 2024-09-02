import { useState } from "react"
import React from "react"
import { ListOfMovies } from "./ShowMovies"
import { useSearchMovies } from "../hooks/useSearchMovies"

export const GetMovies = () => {
  const [nameMovies, setNameMovies] = useState('')
  const { actualMovies } = useSearchMovies(nameMovies)

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const title = fields.get('searchMovies')
    setNameMovies(title)
  }
  
   return (
    <div className="container">
     <header className="search">
        <form className="form" onSubmit={handleSubmit}>
            <input 
            name="searchMovies" 
            placeholder="Avengers, Matrix..." 
            type="text" />
            <button type="submit">
                Search
            </button>
        </form>
     </header>
     <main>
       <ListOfMovies movies={actualMovies} />
     </main>
    </div>
  )
}