import { Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Guide from "./Components/Guide";

import NavbarComponent from "./Components/NavbarComponent";
import ArticleList from "./Square/ArticleList";
import writeArticle from "./Square/writeArticle";
import showArticle from "./Square/ShowArticle";
import Project from "./Components/Project";
import Team from "./Components/Team";
import NewComponent from "./Components/NewComponent";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/Guide" component={Guide} />
      <Route path="/ExamSquare" component={NavbarComponent} />

      <Route path="/ExamSquare/ArticleList" component={ArticleList} exact />
      <Route path="/ExamSquare/writeArticle" component={writeArticle} />
      <Route path="/ExamSquare/ShowArticle" component={showArticle} />

      <Route path="/ExamSquare/Project" component={Project} />
      <Route path="/ExamSquare/Team" component={Team} />
      <Route path="/ExamSquare/New" component={NewComponent} />
    </div>
  );
}

export default App;
