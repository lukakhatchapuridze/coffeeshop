import React from 'react';
import './App.css';
import {Navbar} from './components/index';
import { About, Contact, Header, Menu, Products, Reviews} from './containers/index';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Products />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
