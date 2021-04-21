import "./App.css";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import ProjectPage from "./components/ProjectPage";
import OnRouteChange from "./components/PreventAutoScroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <ProjectPage path="/projects/:projectId" />
      </Router>
      <OnRouteChange
        action={() => {
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
}

export default App;
