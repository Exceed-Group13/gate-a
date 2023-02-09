import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Control from './pages/Control';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Control />} />
      </Routes>
    </div>
  );
}

export default App;
