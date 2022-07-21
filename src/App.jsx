import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './Router';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux"
import { actionCreators } from './state';

function App() {

  // const basket = useSelector((state) => state.basket);
  // const dispath = useDispatch();
  // const AC  = bindActionCreators(actionCreators, dispath);

  return (

      <div className="App">
        <Header></Header>
        <Router/>
        <Footer></Footer>
      </div>

  )
}

export default App
