import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Shop from './Pages/Shop';
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
