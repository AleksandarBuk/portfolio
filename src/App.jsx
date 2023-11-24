import React from 'react'
import styles from './style'

import {Navbar, TechStack, Hero, Skills, Project, Footer}
from './compontents';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Skills/> // * Current skills and toolstack *//
        <Project/> // * Display project section* //
        <TechStack/> // * Display tech-stack* //
        <Footer/> // * Social media section* //
      </div>
    </div>

  </div>
);


export default App