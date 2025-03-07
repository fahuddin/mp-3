import Header from "./components/Header";
import Nav from "./components/Nav";
import { useEffect } from "react";
import {
  Routes,
  RouterProvider,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import StyledContainer from "./components/styledcomponents/StyledContainer";
import StyledWrapper from "./components/styledcomponents/StyledWrapper";
import Footer from "./components/Footer";
import References from "./components/References";
import { useLocation } from "react-router-dom";

function Root() {
  const location = useLocation();
    const path = location.pathname;
    if (path === "/") {
      document.title = 'Home'
    } else if (path === "/education") {
      document.title = 'My Education';
    } else if (path === "/experiences") {
      document.title = "My Experiences";
    } else if (path === "/projects") {
      document.title = "My Projects";
    } else if (path === "/certifications") {
      document.title = "My Certifications";
    } else if (path === "/references") {
      document.title = "My References";
    }
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/education"} element={<Education />} />
        <Route path={"/experiences"} element={<Experiences />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/certifications"} element={<Certifications />} />
        <Route path={"/references"} element={<References />} />
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <>
      <StyledWrapper>
        <Header />
        <StyledContainer>
          <RouterProvider router={router} />
        </StyledContainer>
        <Footer />
      </StyledWrapper>
    </>
  );
}
