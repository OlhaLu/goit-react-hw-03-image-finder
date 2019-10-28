import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from '../../styles.css';

const PhotoCard = ({ tags, likes, views, comments, downloads, webformatURL, largeImageURL }) => {
  return (
  <li className={styles.photo_card}>
  <div className={styles.photo_card}>
  <img src={webformatURL} alt={tags}/>

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      {likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      {views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      {comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      {downloads}
    </p>
  </div>

  <Modal>{({ handleBackdropClick}) => (
<div>
  <button
    type="button"
    onClick={() => handleBackdropClick(largeImageURL)}
    className={styles.fullscreen_button}
  >
  <i className="material-icons">zoom_out_map</i>
  </button>
  </div>
  )}
</Modal>
</div>
</li>
  )
}

PhotoCard.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
};

export default PhotoCard;