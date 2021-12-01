import "./App.css";
import { Fragment } from "react";
// need to use hashrouter for ghpages deployment
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./utility/navbar/Navbar";
function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
