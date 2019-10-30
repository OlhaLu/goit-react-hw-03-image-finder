import React, { Component } from 'react';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    value: '',
  };
  
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    e.preventDefault();
    onSubmit(value);
  };

  render() {
    const { value } = this.state;

    return (
      <form className={styles.search}
      onSubmit={this.handleSubmit}>
        <input className={styles.input}
          type="text"
          autoComplete="off"
          value={value}
          onChange={this.handleChange}
          placeholder="Search images..."
        />
      </form>
    );
  }
}