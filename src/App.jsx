import { Component, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import SingleView from './components/SingleView/SingleView';
import Footer from './components/Footer/Footer';
import MultiView from './components/MultiView/MultiView';
import ItemCard from './components/ItemCard/ItemCard';

function App() {
  
  let [items, setItems] = useState([{},{}]);

  useEffect(() => {
    fetchStorage();
  }, []);


  const fetchStorage = async () => {

    try{
      let storageProm = await fetch('http://localhost:3100/items/');
      if(storageProm.ok){
          let Items = await storageProm.json();

          setItems(Items);
          console.log(Items);
      }
    }
    catch{
      alert("something went wrong with storage data! Json data missing or server containing it is not running "
      + "set the json-server up!write in CMD: json-server --watch database.json --port 3100");
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <MultiView catalog = {items}></MultiView>
      <SingleView item = {items[1]} photos = {items[1].pictures}/>  
      <Footer></Footer>
    </div>
  )
}

export default App
