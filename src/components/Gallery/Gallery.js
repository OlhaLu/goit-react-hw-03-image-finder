import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';
import uuidv1 from 'uuid/v1';

const Gallery = ({ images, onModalOpen }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={uuidv1()}
      className={styles.gallery_item}>
        <PhotoCard
        {...image} 
        onModalOpen={onModalOpen} />
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
  onModalOpen: PropTypes.func.isRequired,
};

export default Gallery;