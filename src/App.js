import React, { useEffect } from 'react';
import {PageView, initGA} from './utils/Tracking';

import Weather from './components/Weather';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    initGA('UA-107706366-4');
    PageView();
  }, [])
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
