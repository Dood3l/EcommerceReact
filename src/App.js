
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import Product from './Products';
import Contact from './Contact';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Used HashRouter instead of BrowserRouter in order to refresh page
function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}


export default App;
