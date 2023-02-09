import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Reset />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
