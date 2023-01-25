import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">


      <Navbar />
      <Home />
      <Register />

    </div>
  );
}

export default App;
