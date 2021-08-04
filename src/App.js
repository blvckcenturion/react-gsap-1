import React, {useEffect} from "react";
import Header from "./components/header";
import Banner from './components/banner';
import Cases from './components/cases';
import "./styles/App.scss";
import gsap from 'gsap';
import IntroOverlay from "./components/introOverlay";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const tl = gsap.timeline();

    tl.from(".line span", 1, {
      y: 100,
      ease: "power4.out",
      delay:1,
      skewY: 10,
      stagger: {
        amount: .3
      }
    }) 
  })
  
  return (
    <div className='App'>
      <IntroOverlay/>
      <Header/>
      <Banner/>
      <Cases/>
    </div>
  );
}

export default App;
