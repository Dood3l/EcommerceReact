import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Products';
import Contact from './components/Contact';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Routes>
    <Route path="/" component={() => <Home />} />
    <Route path="/products" component={() => <Product />} />
    <Route path="/contact" component={() => <Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
