import { Router } from "@reach/router";
import styled from "styled-components/macro";
import Homepage from "./components/Homepage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import OnRouteChange from "./components/PreventAutoScroll";
import { scrollToTop } from "./utils/helper";
import GlobalStyle from "./utils/GlobalStyle";

const StyledApp = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Router>
        <Homepage path="/" />
        <ProjectPage path="/projects/:projectId" />
        <AboutPage path="/about" />
      </Router>
      <Footer />
      <OnRouteChange action={scrollToTop} />
    </StyledApp>
  );
}

export default App;
