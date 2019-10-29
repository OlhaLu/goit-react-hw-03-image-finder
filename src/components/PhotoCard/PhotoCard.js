import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from '../../styles.css';

const PhotoCard = ({ photos, showLargeImage }) => (
  <div className={styles.photo_card}>
  <img src={photos.webformatURL} alt={photos.tags}/>

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      {photos.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      {photos.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      {photos.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      {photos.downloads}
    </p>
  </div>

  <Modal>{({ showLargeImage }) => (
<div>
  <button
    type="button"
    onClick={() => showLargeImage(photos.largeImageURL)}
    className={styles.fullscreen_button}
  >
  <i className="material-icons">zoom_out_map</i>
  </button>
  </div>
  )}
</Modal>
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
  onModalOpen: PropTypes.func.isRequired,
};

export default PhotoCard;