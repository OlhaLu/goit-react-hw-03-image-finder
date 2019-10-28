import React, { Component } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from '../../styles.css';
const uuidv1 = require('uuid/v1');

export default class Gallery  extends Component {
state = {
  data: {},
  id: uuidv1()
}

render () {
  const { id, data } = this.state;
    const { handleBackdropClick, hendeLoadMore } = this.props;

    return (
    <ul className={styles.gallery}>
        {data.map(item => (
            <PhotoCard 
            id={id}
            photo={item} 
            onImgClick={handleBackdropClick} />
    ))}
  <button 
  type="button" 
  onClick={hendeLoadMore}>
    Load more
  </button>
  </ul>
    )
  }
}

