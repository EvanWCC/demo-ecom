import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import Menclothes from './pages/Menclothes';
import ProductDetail from './pages/ProductDetail';
import WomenClothes from './pages/WomenClothes';
import Jewelry from './pages/Jewelry';
import HomeDecoration from './pages/HomeDecoration'
import PhonePage from './pages/PhonePage'
import ElectronicsPage from './pages/ElectronicsPage'
import ComputerPage from './pages/ComputerPage'
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/men">
            <Menclothes />
          </Route>
          <Route exact path="/women">
            <WomenClothes />
          </Route>
          <Route exact path="/jewelry">
            <Jewelry />
          </Route>
          <Route exact path="/home">
            <HomeDecoration />
          </Route>
          <Route exact path="/phone">
            <PhonePage />
          </Route>
          <Route exact path="/electronics">
            <ElectronicsPage />
          </Route>
          <Route exact path="/computers">
            <ComputerPage />
          </Route>
          <Route exact path="/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
