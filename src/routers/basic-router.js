import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Upload from "../pages/upload-record";
import Edit from "../pages/edit-record";

function BasicRouter() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/records" element={<Home />}>
          </Route>
          <Route path="/records/upload" element={<Upload />}>
          </Route>
          <Route path="/records/:index/edit" element={<Edit />}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default BasicRouter;
