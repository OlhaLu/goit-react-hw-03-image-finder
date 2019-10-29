import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import {fetchPhotos} from '../config/configAPI';
// import styles from '../../styles.css';

const mapper = photos => {
  return photos.map(({
    id, webformatURL, largeImageURL, likes, views, comments, downloads}) => ({
    id, webformatURL, largeImageURL, likes, views, comments, downloads
  }));
};

export default class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    photos: [],
    modalImage: false,
    currentPage: 1,
    currentRequest: ''
  };

  componentDidUpdate(prevProps, prevState) {
    const { photos } = this.state;
    if (prevState.photos !== photos) {
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    }
  }

  handleSubmit = e => {
    const { query, pageNumber } = this.state;
    e.preventDefault();
    const handlePageNumber = pageNumber + 1;
    this.setState({ page: handlePageNumber });
    this.fetchPhotos(query, handlePageNumber);
  };

  hendelLoadMore = () =>
  this.setState(({ currentPage }) => {
    return { currentPage: currentPage + 1 };
  });
  
  fetchPhotos = () => {
    const { query, pageNumber } = this.state;
  
    fetchPhotos(query, pageNumber)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...mapper(photos)],
          pageNumber: prevState.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
  };

  onModalOpen = image => {
    this.setState({ modalImage: image });
  };

  onModalClose = () => {
    this.setState({ modalImage: null });
  };

  render () {
    const { photos, modalImage } = this.state;

    return (
      <>
     <div>
      <SearchForm onSubmit={this.handleSubmit} />
        <Gallery photos={photos} 
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