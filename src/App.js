import React, { useEffect, useState } from "react";
import Header from "./components/header";
import "./styles/App.scss";
import gsap from "gsap";
import {Route} from 'react-router-dom';
import Navigation from "./components/navigation";
//pages 
import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";


//routes

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/case-studies', name: 'Case Studies', component: CaseStudies},
  {path: '/approach', name: 'Approach', component: Approach},
  {path: '/services', name: 'Services', component: Services},
  {path: '/about', name: 'About Us', component: About},
]
//Dynamic resizing -> debouncer function 
function debounce(fn, ms) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const tl = gsap.timeline();
  tl.to("body", 0, {css: {visibility: "visible"}})

  useEffect(() => {
    
    //making the body visible

    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    //Dynamic resizing
    const debouncedHandleResize = debounce(function handleResize(){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 100)
    //Dynamic resizing
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
    
  })
  return (
    <>
      <Header dimensions={dimensions}/>
      <div className='App'>
        {routes.map(({path, component}) => (<Route key={path} exact path={path} component={component}/>))}
      </div>
      <Navigation/>
    </>
  );
}

export default App;
