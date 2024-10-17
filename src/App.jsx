import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPortfolio from './pages/DetailPortfolio';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio/:id' element={<DetailPortfolio/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App