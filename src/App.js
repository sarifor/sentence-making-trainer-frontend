import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/records" element={<div><p>home</p></div>}>
          </Route>
          <Route path="/upload" element={<div><p>upload</p></div>}>
          </Route>
          <Route path="/:index/edit" element={<div><p>edit</p></div>}>
          </Route>
          <Route path="/:index/delete" element={<div><p>delete</p></div>}>            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
