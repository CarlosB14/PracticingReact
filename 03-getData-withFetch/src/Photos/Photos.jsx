import { getPhotos } from "../getPhotos/getPhotos"
import { useEffect, useState } from "react"


export function ShowPhotos () {
  const [photos, setPhotos] = useState([]) 

  useEffect(() => {
    const getPhotosFormated = async () => {
      const listPhotos = await getPhotos()
      setPhotos(listPhotos)
    }
    getPhotosFormated()
  }, [])
    return (
        <section className="photos">
                {photos && 
                  photos.map(photo => 
                  (
                   <article key={photo.id} className="photo">
                    <h3>{photo.title}</h3>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                   </article>
                   ))}
        </section>
    )
}