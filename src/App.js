import React, { useEffect } from 'react';
import ReactGa from 'react-ga';

import Weather from './components/Weather';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-107706366-4')
    ReactGa.pageview('/app')
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
