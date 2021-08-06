import React, {useEffect, useState} from 'react'
import IntroOverlay from '../components/introOverlay'
import Banner from '../components/banner';
import Cases from '../components/cases';
import gsap from 'gsap';

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl
    
  //fade in the header
  .from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay:1,
    skewY: 10,
    stagger: {
      amount: .3
    }
  })
  //fade out the top portion of the introOverlay
  .to(".overlay-top", 1.6, {
    height: 0,
    ease: "expo.inOut",
    stagger: {
      amount: 0.4
    }
  })
  // .to(selector -> ".overlay-top", duration ->  1, config -> {
  //   width: 0,
  //   ease: "expo.inOut",
  //   delay-between-elements -> stagger: .4
  // })

  //fade out the bottom portion of the introOverlay
  .to(".overlay-bottom", 1.6, {
    width: 0,
    ease: "expo.inOut",
    delay: -0.8,
    stagger: {
      amount: 0.4
    }
  }).to(".intro-overlay", 0, {css: {display: 'none'}})
  //scale down the images
  .from(".case-image img", 1.6, {
    scale: 1.4,
    ease: "expo.inOut",
    delay: -2,
    stagger: {
      amount: 0.4
    },
    onComplete: completeAnimation
  })
}

const Home = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
      setAnimationComplete(true);
    }

     useEffect(() => {

      homeAnimation(completeAnimation);

  
  }, [])

    return (
        <>
            {animationComplete === false && <IntroOverlay/>}
            <Banner/>
            <Cases/>
        </>
    )
}

export default Home
