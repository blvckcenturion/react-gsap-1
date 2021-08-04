import React, {useEffect} from "react";
import Header from "./components/header";
import Banner from './components/banner';
import "./styles/App.scss";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })

  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <Cases/>
    </div>
  );
}

export default App;
