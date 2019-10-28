import React, { Component } from 'react';
import styles from '../../styles.css';

export default class SearchForm extends Component {
  state = {
    value: '',
  };
  
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.value);

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form 
      className={styles.searchForm} 
      onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={value}
          onChange={this.hendelChenge}
          placeholder="Search images..."
        />
      </form>
    );
  }
}