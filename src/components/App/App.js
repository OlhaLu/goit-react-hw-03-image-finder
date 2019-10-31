import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import {fetchPhotos} from '../../config/configAPI';
import styles from './App.module.css';

const mapper = images => {
  return images.map(({ webURL: webformatURL, ...props }) => ({
    webformatURL,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    images: [],
    largeImageURL: '',
    isModalOpen: false
  };

  handleSubmit = query => {
    this.setState({ query, images: [], pageNumber: 1 }, this.getImages);
  };

  getImages = () => {
    const { query, pageNumber} = this.state;
    fetchPhotos(query, pageNumber)
      .then(value => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(value)],
          pageNumber: prevState.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
};

hendelLoadMore = () => {
  this.setState(
    prevState => ({ pageNumber: prevState.pageNumber + 1 }))

  const { query, pageNumber, images } = this.state;
  fetchPhotos(query, pageNumber)
      .then(value => {
      this.setState({
    images: [...images, ...mapper(value)],
      });
      window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
        });
      })
      .catch(error => {
        this.setState({ error });
    })
}

  onModalOpen = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: null });
  };

  render () {
    const { images, largeImageURL, isModalOpen } = this.state;

    return (
      <>
     <div className={styles.app}>
      <SearchForm onSubmit={this.handleSubmit} />
        <Gallery images={images} 
        onModalOpen={this.onModalOpen}
        />  
        {isModalOpen && (
          <Modal onModalClose={this.onModalClose}>
          <img src={largeImageURL} alt="" className={styles.image} />
          </Modal>
        )}
      </div>   
      <div className={styles.container}>
      <button className={styles.button}
        disabled={!this.state.query}
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