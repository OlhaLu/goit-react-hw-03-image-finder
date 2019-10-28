import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import SearchForm from './SearchForm/SearchForm';
import {fetchPhotos} from '../config/configAPI';
// import styles from '../../styles.css';

const mapper = photos => {
  return photos.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    photos: [],
    currentPage: 1,
    currentRequest: ''
  };


  handleSubmit = query => {
    this.setState({ query, photos: [], page: 1 }, this.fetchPhotos);
  };

  hendeLoadMore = () =>
  this.setState(({ currentPage }) => {
    return { currentPage: currentPage + 1 };
  });
  
  fetchPhotos = () => {
    const { query, page } = this.state;
  
    fetchPhotos(query, page)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...mapper(photos)],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
  };

  render () {
    const { currentPage, currentRequest } = this.state;

    return (
      <>
      <SearchForm hendelSerch={this.hendelSerch} />
      <Gallery 
      request={currentRequest}
      page={currentPage}
      restPages={this.handleSubmit}
      hendeLoadMore={this.hendeLoadMore}
      />
      </>
    );
    }
}