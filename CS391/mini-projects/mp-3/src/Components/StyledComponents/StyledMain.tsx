import styled from 'styled-components';

const StyledMain = styled.main`
display: flex;
    flex-direction: column;
    width:70%;
    background-color: teal;
   

p { font-size: calc(2px + 2vw; 
    padding: 2%;)

     }

text {

 align-self: center;
    width: 50%;
    margin: 1vh 1vw;
}

h1 {
 margin: 4vw 0;
    font-size: calc(5px + 3vw);
    text-align: center;
    color: black;

}
    

@media (max-width: 750px){
         display: flex;
        flex-direction: column;
        width:100%;
        height: 80vh;
        background-color: purple;

  p {

  font-size: calc(3px + 1vw);
        margin: 1% 1%;
  
  }

  h1{
        width: 100%;
        align-self: center;
        margin: 2v 2vw;
        text-align: center;
}




}

`;

export default StyledMain

