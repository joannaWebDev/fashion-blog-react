import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ContactUS from './containers/ContactForm/ContactForm';
import Post from './containers/Post/Post';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <Router basename="/fashion-blog-react">
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
