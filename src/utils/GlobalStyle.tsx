import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #353535;
    --main-color: #dcd6d0;
    --highlight: #fc3e1d;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    margin: 0;
    font-family: Montserrat, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--main-color);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAADc1tTU0szc0szc1szUzsyVZtonAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAsRJREFUOI0VlNEBpDAIRNOCSa6AABYQyBYQwAJOvf5bufFn3XUjDG8GC12dmmvbbn/MZOsiSZUotDzEOXTEXEKDT/JJFMWWrsjF+KVG6eFLyZ1KcEuZv6GZZpvoFSMWi5KooitlVac9KPp+etKgIq5Oo7bc00VkBTnLrFmSUvtsty9aTFUvfk+1XovUoP7jsSEJtfVT9HUvoTc7kUNX/mST8iv3K1TspGhq2drcy6uzm3LHgLu7df9LJrREcOkxIXSWdJ5uTMGfWLuFM48ctdhDe+F2xcT+0cGDSecqh0Bo9fuZL9moKZ38pGpFje+LvRLqVYsIVuLnGQWa69krx+wxBm3HAWmhJcyJOYekq8ALTmJnstLTcEP0ZEzgng6XePlZAKFj6KUBbbPtqHEHuJabmXarQCm6cwJPCivDWoV25RvfU+E4o4RKu8pAp8NlqtKivHQtPYiHlIWjnFWAcBDA58JDSEcBtz4r/6H+jzyhlcOriJafg/TMeRAlXNWlg38yHKUArwNpf0bIkN8OXQ1GzaqImSYdqLy6MoKIFlTogqnISfb6Ig1xOIn9Es1jM/SsLgYeYV+mqF9aFiGJFefGDnAEdGnLVhYPIl33vmOt7teie8BoyrJWS7J0owvR7gjSCJy9S3YoUt4SjDS7Hy89lQeXNy2M/EvsAG2JpYYM/wo7dHPi1kbM8L9/p6gXBNc/fDRFDkK42YfdWAOzaSMSzGc+b3ojoX2eVNzguVPQw/F7Lj+7VkTlKiT6mUB9sbCAFd/HBOdiOIxUoqFA/5Rpn80kRd3CxVp7O6IF/6gFsWah6WMOGDuXewd5/3ISjJQ4lhi6+reDookGukYU/nLpp+mmD6rSG9B5YaNg/PUtOoBVDO+BK7YafsBw0Wf16KPPKT7S8Ik1GPxiWmPFG2E7xpqGCSEXsPFGyMD4DdQQYR6U/wHGv9Z6GLFvTQAAAABJRU5ErkJggg==);
    color: var(--black);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  li {
    list-style-type: none;
  }

  h1 {
    font-size: calc(36px + 1.5vw);
    font-weight: 600;
  }

  p {
    font-size: calc(18px + 0.5vw);
  }
`;

export default GlobalStyle;
