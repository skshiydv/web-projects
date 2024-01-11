// import Nav from './Components/nav';
// import Page1 from './Components/page1';
// import Timer from './Components/timer';
// import socials from './Components/socials';
// import { BrowserRouter,Route,Routes , Navigate} from 'react-router-dom';
// import Projects from './Components/projects';
// import Gallery from './Components/gallery';
// import Team from './Components/team';
// import Footer from './Components/footer';
// import Socials from './Components/socials';
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>    
//     <header>
//     <Timer />
//     <Nav>
//     <Routes>
//   <Route path="/" element={<Page1 />} />
//   <Route path="/team" element={<Team />} />
//   <Route path="/projects" element={<Projects />} />
 
// </Routes>
//     </Nav>
//     </header>
//     <Socials />
//     <Page1 />
//     <Projects />
//     <Team />
//     <Gallery />
//     <Footer /> 
//     </BrowserRouter>
//     </div>
   

   
//   );
// }

// export default App;
// App.js
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/nav';
import Page1 from './Components/page1';
import Team from './Components/team';
import Gallery from './Components/gallery';
import Projects from './Components/projects';
import Footer from './Components/footer';

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
       <Nav />
        <Page1 />
        {/* <Routes>
          <Route path="/home" element={<Page1 />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
        <Projects />
        <Team />
        <Gallery />
        <Footer />
      </div>
    // </BrowserRouter>
  );
}

export default App;
