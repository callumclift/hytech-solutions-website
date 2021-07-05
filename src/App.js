import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Testimonials from './pages/Testimonials/Testimonials';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import axios from 'axios';

axios.defaults.baseURL = 'https://europe-west2-hytech-solutions-website.cloudfunctions.net/api';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
