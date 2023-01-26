import {
  Routes,
  Route,
  Link, Switch
} from "react-router-dom";

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'





function App() {
  return (
    <div>


      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        
      </Switch>

      

    </div>









  );
}

export default App;
