import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
