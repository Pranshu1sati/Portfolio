 import React from 'react';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/expericence/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
const App = () => {
  return (<>
  <Header />
  <Nav />
  <About />
  <Experience />
  <Services />
  <Portfolio />
  {/* <Testimonials /> */}
  <Contact />
  <Footer />
  </>
    // <div>App lala</div>
  )
}

export default App