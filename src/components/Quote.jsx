import React, { Component } from 'react';
import axios from 'axios';
import { Event } from '../utils/Tracking';

// const clickHandler = () => {
  // new QuoteContent();
  // Event('Button', 'Refresh', 'Refresh quote');
// }

class Quote extends Component {
  state = {
    trump: '',
    kanye: ''
  }

  fetchQuotes() {
    // trump API GET
    const trumpURL = 'https://www.tronalddump.io/random/quote';
    axios.get(trumpURL)
      .then(response => this.setState({ trump: response.data.value }))
      .catch(error => console.error (error));

    // kanye API GET
    const kanyeURL = 'https://api.kanye.rest/'
    axios.get(kanyeURL)
      .then(response => this.setState({ kanye: response.data.quote }))
      .catch(error => console.error (error));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  render() {
    const quote = `${this.state.trump} ${this.state.kanye}`;

    const clickHandler = () => {
      this.fetchQuotes()
      Event('Button', 'Refresh', 'Refresh quote');
    }

    return (
      <section id="quoteContainer" className="container quote">
        <button id="quoteRefreshBtn"
            className="quote__refresh-btn"
            title="refresh quote"
          onClick={ clickHandler }>
        </button>
        <span id="quoteTrump">{quote}</span>
      </section>
    )
  }
}

export default Quote;

