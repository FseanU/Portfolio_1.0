import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <ProjectPage path="/projects/:projectId" />
      </Router>
    </div>
  );
}

export default App;
