import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import {fetchPhotos} from '../config/configAPI';
// import styles from '../../styles.css';

const mapper = images => {
  return images.map(({
    id, webformatURL, largeImageURL, likes, views, comments, downloads}) => ({
    id, webformatURL, largeImageURL, likes, views, comments, downloads
  }));
};

export default class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    images: [],
    modalImage: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state;
    if (prevState.images !== images) {
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1 }, this.getImages);
  };
  
  getImages = () => {
    const { query, pageNumber } = this.state;
  
    fetchPhotos(query, pageNumber)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(images)],
          pageNumber: prevState.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
};

hendelLoadMore = () =>
this.setState(({ pageNumber }) => {
  return { pageNumber: pageNumber + 1 };
});

  onModalOpen = image => {
    this.setState({ modalImage: image });
  };

  onModalClose = () => {
    this.setState({ modalImage: null });
  };

  render () {
    const { images, modalImage } = this.state;

    return (
      <>
     <div>
      <SearchForm onSubmit={this.handleSubmit} />
        <Gallery images={images} 
        onModalOpen={this.onModalOpen} />
        {modalImage && (
          <Modal modalImage={modalImage} 
          onModalClose={this.onModalClose} />
        )}
        <button
          type="button"
          onClick={this.hendelLoadMore}
        >
          Load more
        </button>
      </div>
      </>
    );
    }
}