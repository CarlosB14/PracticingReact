import React, { useState } from 'react'


// URL_TO_SEARCH = 'https://picsum.photos/v2/list'
export const ShowArt = () => {
  const [artList, setArtList] = useState([])
  const handleClick = () => {
    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(arts => setArtList(arts))
    .catch((e) => console.error(`Error doing the fetch, ${e}`))
    }
  


  return (
    <div className='container'>
     <header>
      <h1>SEARCH SEARCH SEARCH !!!</h1>
      <button onClick={handleClick}>
        Show Art
      </button>
     </header>
     <main className='arts'>
        {artList && 
          artList.map(art => (
            <article key={art.id} className='art'>
              <h2 className='titulo'>{art.author}</h2>
              <img src={art.download_url} alt={art.author} className='imagen' />
            </article>
        ))}
     </main>
    </div>
  )
}

