import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';
import uuidv1 from 'uuid/v1';

const Gallery = ({ images, showLargeImage }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={uuidv1()} 
      className="galleryItem">
        <PhotoCard
        image={image} 
        onModalOpen={showLargeImage} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  showLargeImage: PropTypes.func.isRequired,
};

export default Gallery;