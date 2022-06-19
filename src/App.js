import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductsPage from './pages/ProductsPage';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/adminpanel">
          <AdminPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
