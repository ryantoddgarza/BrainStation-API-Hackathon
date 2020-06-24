import React, { Component } from 'react';
import axios from 'axios';
import { Event } from '../utils/Tracking';

class Quote extends Component {
  state = {
    trump: '',
    kanye: ''
  }

  fetchQuotes = () => {
    // trump API GET
    axios.get('https://www.tronalddump.io/random/quote')
      .then(response => this.setState({ trump: response.data.value }))
      .catch(error => console.error (error));

    // kanye API GET
    axios.get('https://api.kanye.rest/')
      .then(response => this.setState({ kanye: response.data.quote }))
      .catch(error => console.error (error));
  }

  clickHandler = () => {
    this.fetchQuotes()
    Event('Button', 'Refresh', 'Refresh quote');
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  render() {
    const quote = `${this.state.trump} ${this.state.kanye}`;

    return (
      <section id="quoteContainer" className="container quote">
        <button id="quoteRefreshBtn"
                className="quote__refresh-btn"
                title="refresh quote"
                onClick={this.clickHandler}>
        </button>
        <span id="quoteTrump">{quote}</span>
      </section>
    )
  }
}

export default Quote;

