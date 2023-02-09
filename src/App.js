import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import ResetPass from './pages/ResetPass';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
