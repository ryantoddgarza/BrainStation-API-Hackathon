import React from 'react';
import Weather from './components/Weather';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <main>
        <Weather />
        <Quote />
      </main>
      <Footer />
    </div>
  )
}

export default App;
