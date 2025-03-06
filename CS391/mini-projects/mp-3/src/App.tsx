import Header from './Components/Header';
import Nav from './Components/Nav';
import { Routes ,RouterProvider, Route, createBrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Education from './Components/Education';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import StyledContainer from './Components/StyledComponents/StyledContainer';
import StyledWrapper from './Components/StyledComponents/StyledWrapper';
import Footer from './Components/Footer';
import References from './Components/References';

  function Root(){
    return (
      <>
      <Nav/>
      <Routes>
      <Route path={"/"} element={<Home/>}/>
      
      <Route path={"/education"} element={<Education/>}/>
      <Route path={"/experiences"} element={<Experiences/>}/>
      <Route path={"/projects"} element={<Projects/>}/>
      <Route path={"/certifications"} element={<Certifications/>}/>
      <Route path={"/references"} element={<References/>}/>
      
        </Routes>
        </>
    );
  }

  
  const router = createBrowserRouter(
    [
      {path: "*", Component: Root}
    ]
  )




export default function App() {

  return (
    <>
    <StyledWrapper>
      
    <Header/>

   
  
    <StyledContainer>
    <RouterProvider router={router}/>
    </StyledContainer>
    <Footer/>
    </StyledWrapper>
    </>
   
  );
}

