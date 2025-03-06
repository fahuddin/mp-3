
import styled from 'styled-components';

const StyledMain = styled.main`
display: flex;
    flex-direction: column;
    width:70%;
    background-color: teal;

    img{
       width: 40%;
    margin: 2vh 1vw;
    }

    @media (max-width: 750px){
    width: 100%;
    background-color: purple;
    height: 100vh;

    img {

    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    }
    
    }

   

`;

const StyledProfile = styled.img`
max-width:100%;


   

`;


const StyledP = styled.p`
font-size: calc(2px + 2vw);
padding: 2%;

`;


const StyledText = styled.text`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
`;


const StyledTitle = styled.h1`
    margin: 4vw 0;
    font-size: calc(5px + 3vw);
    text-align: center;
    color: moccasin;
    color: black;

`

const StyledMainDiv = styled.div`

    margin: auto;
    padding: 2%;
`;






    


export default function Home() {
  return (
    <StyledMain>
      <StyledTitle>Home</StyledTitle>

      <StyledMainDiv>
        <div id="main-img">
          <StyledProfile id="profile" src="/public/src.jpg"/>
        </div>
        <StyledText>
          <StyledP>
            My name is Fahim Uddin. I am majoring in a Bachelor's degree in Computer Science at Boston
            University, and I intend to pursue my master's degree by 2026. You will find most of my information
            here, and I aim to be well-versed in all subjects in computer science.
          </StyledP>
          </StyledText>
          </StyledMainDiv>

      <StyledP>
        Welcome to my resume website.
    </StyledP>
      </StyledMain>
  );
}
