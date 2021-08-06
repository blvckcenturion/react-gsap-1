import React, { useEffect } from "react";
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

function App() {

  useEffect(() => {
    const tl = gsap.timeline();
    //making the body visible

    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    tl.to("body", 0, {css: {visibility: "visible"}})
  })


  
  return (
    <>
      <Header/>
      <div className='App'>
        {routes.map(({path, component}) => (<Route key={path} exact path={path} component={component}/>))}
      </div>
      <Navigation/>
    </>
  );
}

export default App;
