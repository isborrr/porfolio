import React from 'react';
import logo from './logo.svg';
import Header from './header/Header.js'
import Profile from './body/Profile.js'
import Experience from './body/Experience.js'
import Projects from './body/Projects.js'
import Contact from './body/Contact.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <Profile/>
     <Experience/>
     <Projects/>
     <Contact/> */}
    </div>
  );
}

export default App;
