import { Router } from "@reach/router";
import "./App.css";
import Homepage from "./components/Homepage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import OnRouteChange from "./components/PreventAutoScroll";
import { scrollToTop } from "./utils/helper";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <ProjectPage path="/projects/:projectId" />
        <AboutPage path="/about" />
      </Router>
      <Footer />
      <OnRouteChange action={scrollToTop} />
    </div>
  );
}

export default App;
