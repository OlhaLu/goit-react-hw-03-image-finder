import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from '../../styles.css';
const uuidv1 = require('uuid/v1');

const Gallery = ({ photos, showLargeImage }) => (
  <ul className={styles.gallery}>
    {photos.map(item => (
      <li key={uuidv1()} 
      className="galleryItem">
        <PhotoCard 
        item={item} 
        onModalOpen={showLargeImage} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default Gallery;