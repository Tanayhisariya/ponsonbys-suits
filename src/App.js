// import Layout from "./components/Layout";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Suits from './Pages/Suits';
import Pagenotfound from './Pages/Pagenotfound';
function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/suits" element={<Suits/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
