import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Notations from './pages/Notations';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='about' element={<About/>}/>
          <Route path='notations' element={<Notations/>}/>
        </Route>
        <Route path='test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
