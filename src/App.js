import './App.css';
import './css/main.css'
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav"
import About from './components/About/About';
import Explore from './components/Explore/Explore';
import Collection from './components/Create/Collection'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import React from 'react';
import NFT from './components/Create/Nft';
import CollectionExplore from './components/Explore/Collection';
import NftExplore from './components/Explore/Nft';
import UserExplore from './components/Explore/User';
import ProductsDetails from './components/Products/ProductsDetails';
import ScrollToTop from './components/ScrollToTop';
import Profile from './components/Profile/Profile';
import Drop from './components/Drop/Drop';

function App() {
  return (
    <React.Fragment className="App black_bg">
     <BrowserRouter>
        <Nav />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/explore/collection" element={<CollectionExplore />} />
          <Route path="/explore/nft" element={<NftExplore />} />
          <Route path="/explore/user" element={<UserExplore />} />
          <Route path="/productsDetails" element={<ProductsDetails />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
