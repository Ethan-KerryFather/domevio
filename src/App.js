import { Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Guide from "./Components/Guide";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />

      <Route path="/Guide" component={Guide} />
    </div>
  );
}

export default App;
