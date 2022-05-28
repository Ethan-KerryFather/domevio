import { Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Guide from "./Components/Guide";

import NavbarComponent from "./Components/NavbarComponent";
import ArticleList from "./Square/ArticleList";
import writeArticle from "./Square/writeArticle";
import showArticle from "./Square/ShowArticle";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />

      <Route path="/Guide" component={Guide} />

      <Route path="/ExamSquare" component={NavbarComponent} />

      <Route path="/ExamSquare/ArticleList" component={ArticleList} exact />
      <Route path="/ExamSquare/writeArticle" component={writeArticle} />
      <Route path="/ExamSquare/ShowArticle" component={showArticle} />
    </div>
  );
}

export default App;
