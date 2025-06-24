import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import About from './Pages/About';
import CardDetails from './Pages/CardDetails';
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Shop/:id' element={<CardDetails/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
