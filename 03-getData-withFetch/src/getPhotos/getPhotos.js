const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos/';

export async function getPhotos() {
  try {
    const response = await fetch(PHOTOS_URL);
    const photosUrl = await response.json();
    const photosFormatted = photosUrl.slice(0, 20); // Obtén solo las primeras 20 fotos
    return photosFormatted; // Retorna las fotos obtenidas
  } catch (error) {
    console.error("Error fetching photos:", error);
    return []; // En caso de error, retorna un array vacío
  }
}

