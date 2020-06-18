import React, { Component } from 'react';
import axios from 'axios';

// trump api GET
const getTrump = () => {
  const url = 'https://www.tronalddump.io';
  const ext = '/random/quote';
  axios.get(url + ext)
  .then((response) => {
    document.getElementById('quoteTrump').innerText = response.data.value;
  })
  .catch((error) => console.error (error));
};

// kanye api GET
const getKanye = () => {
  const url = 'https://api.kanye.rest/'
  axios.get(url)
  .then((response) =>{
    document.getElementById('quoteKanye').innerText = response.data.quote;
  })
  .catch((error) => console.error (error));
};

const generateQuotes = () => {
  getTrump();
  getKanye();
};

generateQuotes();

class Quote extends Component {
  render() {
    return (
      <section id="quoteContainer" className="container quote">
        <button id="quoteRefreshBtn"
            className="quote__refresh-btn"
            title="refresh quote"
            onClick={generateQuotes}>
        </button>
        <span id="quoteTrump"></span>
        <span id="quoteKanye"></span>
      </section>
    )
  }
}

export default Quote;
