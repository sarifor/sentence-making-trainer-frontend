import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><p>hi</p></div>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
