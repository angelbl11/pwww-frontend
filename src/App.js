import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductsPage from './pages/ProductsPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ProductsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
