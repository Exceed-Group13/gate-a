import './App.css';
import Control from "./pages/Control";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="" element={<Control />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
