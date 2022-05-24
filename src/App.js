import { Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavbarComponent} />

      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
