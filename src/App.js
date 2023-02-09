import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reset from './pages/Reset';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      {/* <Home /> */}
    <Routes>
      <Route path="/reset" element={<Reset />} />
      <Route path="/" element={<Home />} />


    </Routes>  
    </header>
  </div>
  );
}

export default App;
