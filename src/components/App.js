import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Upload from "./Upload";
import Edit from "./Edit";
// import Delete from "./Delete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/records" element={<Home />}>
          </Route>
          <Route path="/records/upload" element={<Upload />}>
          </Route>
          <Route path="/records/:index/edit" element={<Edit />}>
          </Route>
          <Route path="/records/:index/delete">
            {/* Execute Delete Logic*/}
            <Redirect to="/records" />            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
