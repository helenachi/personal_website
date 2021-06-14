import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component ={Home}/>
          <Route path="/experience" exact component ={Experience}/>
          <Route path="/projects" exact component ={Projects}/>
          <Route path="/about" exact component ={About}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
