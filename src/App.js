import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
// import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      {/* <Route path='/404' component={NotFound} /> */}
      {/* <Redirect from='*' to='/404' /> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
