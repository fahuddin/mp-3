
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
    @media (max-width: 750px){
   width:100%;
   height: 100%;
    flex-direction: column;
  
  }
  `;

  export default StyledContainer