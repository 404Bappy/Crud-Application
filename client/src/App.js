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
import Edit from "./components/Edit";





function App() {
  return (
    <div>


      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit/:id" component={Edit} />
        
      </Switch>

      

    </div>









  );
}

export default App;
