import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Changepass from './pages/Changepass';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/changepass" element={<Changepass />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
