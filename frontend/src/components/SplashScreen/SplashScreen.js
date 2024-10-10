import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SplashScreen.css'; 

gsap.registerPlugin(ScrollTrigger);

const SplashScreen = () => {
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: 'top top',
              end: '+=150%',
              pin: true,
              scrub: true,
              markers: true,
            },
          });
      
          tl.to('img', {
            scale: 2,
            z: 350,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
          }).to(
            '.section.hero',
            {
              scale: 1.1,
              transformOrigin: 'center center',
              ease: 'power1.inOut',
            },
            '<'
          );
        }
      
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
      
      

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero"></section>
        {/* <section className="section gradient-purple"></section>
        <section className="section gradient-blue"></section> */}
      </div>
      <div className="image-container">
      <img src="https://i.postimg.cc/VNcbPKWf/eslogan-1.png" alt="Slogan de la empresa" />

      </div>
    </div>
  );
};

export default SplashScreen;