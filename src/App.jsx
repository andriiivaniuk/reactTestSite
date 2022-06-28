import { Component, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import SingleView from './components/SingleView/SingleView';
import Footer from './components/Footer/Footer';
import MultiView from './components/MultiView/MultiView';
import ItemCard from './components/ItemCard/ItemCard';
import Router from './Router';

function App() {

  return (
    <div className="App">
      <Header></Header>
      
      <Router/>
      <Footer></Footer>
    </div>
  )
}

export default App
