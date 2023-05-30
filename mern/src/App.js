import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './Assets/Wrappers/ErrorPage';
import { Dashboard, Register, Landing, Error } from './pages';
//import Wrapper from '../assets/wrappers/ErrorPage';
//import { Link } from 'react-router-dom';

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<Dashboard />}/>
    <Route  path="/register" element={<Register />}/>
    <Route  path="/landing" element={<Landing />}/>
    <Route  path="/Error" element={<Error />}/>
    <Route  path="*" element={<ErrorPage />}/>   
  </Routes>
  </BrowserRouter>
  
 );
}

export default App;
