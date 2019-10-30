import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ webformatURL, tags, likes, views, comments, downloads, largeImageURL, onModalOpen}) => (
  <div className={styles.photo_card}>
  <img className={styles.img_web} src={webformatURL} alt={tags}/>

  <div className={styles.stats}>
    <p className={styles.stats_item}>
      <i className="material-icons">thumb_up</i>
      {likes}
    </p>
    <p className={styles.stats_item}>
      <i className="material-icons">visibility</i>
      {views}
    </p>
    <p className={styles.stats_item}>
      <i className="material-icons">comment</i>
      {comments}
    </p>
    <p className={styles.stats_item}>
      <i className="material-icons">cloud_download</i>
      {downloads}
    </p>
  </div>

  <div>
    <button
      type="button"
      className={styles.fullscreen_button}
      onClick={() => onModalOpen(largeImageURL)}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
  </div>
  )

PhotoCard.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    onModalOpen: PropTypes.func.isRequired,
};

export default PhotoCard;