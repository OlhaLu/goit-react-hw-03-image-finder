export const fetchPhotos = (query = '', pageNumber = 1, perPage = 12) => {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=
      ${query}&page=${pageNumber}&per_page=${perPage}`,
    )
      .then(res => res.json())
      .then(data => data.hits)
      .catch(error => {
        throw error;
      });
  };