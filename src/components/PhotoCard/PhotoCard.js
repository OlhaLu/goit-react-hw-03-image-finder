import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.css';

const PhotoCard = ({ images, showLargeImage }) => (
  <div className={styles.photo_card}>
  <img src={images.webformatURL} alt={images.tags}/>

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      {images.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      {images.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      {images.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      {images.downloads}
    </p>
  </div>

  <div>
    <button
      type="button"
      className={styles.fullscreenButton}
      onClick={() => showLargeImage(images.largeImageURL)}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
  </div>
  )

PhotoCard.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired
  }).isRequired,
  showLargeImage: PropTypes.func.isRequired,
};

export default PhotoCard;