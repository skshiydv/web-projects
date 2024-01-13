import Nav from './Components/nav';
import Socials from './Components/socials';
import Timer from './Components/timer';
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
        <Projects />
        <Team />
        <Gallery />
        <Socials />
        <Timer />
        <Footer />
      </div>
  );
}

export default App;
