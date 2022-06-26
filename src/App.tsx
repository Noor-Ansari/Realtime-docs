import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./features/Home";
import DocEditor from "./features/DocEditor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doc-editor/:docId" element={<DocEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
