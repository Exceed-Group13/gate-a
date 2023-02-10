import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import ResetPass from './pages/ResetPass';
import Changepass from './pages/Changepass';
import Control from './pages/Control';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/changepass" element={<Changepass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/" element={<Control />} />
      </Routes>
    </div>
  );
}

export default App;
