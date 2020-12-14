import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticleList} />
            <Route path="/article/:name" component={ArticlePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
