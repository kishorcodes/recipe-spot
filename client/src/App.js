import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
