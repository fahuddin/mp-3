import styled from 'styled-components';
import Calculator from './Calculator';

// StyledMain (equivalent to main in CSS)
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: teal;

  p {
    font-size: calc(2px + 2vw);
  }

  #text {
    align-self: center;
    width: 100%;
    margin: 1vw;
    padding: 0 2% ;
  }

  #title {
    margin: 4vw 0;
    font-size: calc(5px + 3vw);
    text-align: center;
    color: black;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: purple;

    p {
      font-size: calc(3px + 1vw);
      margin: 1% 1%;
    }

    #text {
      width: 100%;
      align-self: center;
      text-align: center;
    }

    #title {
      font-size: calc(5px + 2vw);
      text-align: center;
    }
  }
`;

// StyledTable (equivalent to table in CSS)
const StyledTable = styled.table`
  width: 100%;

  @media screen and (max-width: 750px) {
    display: flex;
  justify-content: center;
    tr {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      width: 30vw;
      margin: 1vh 1vw;
    }

    th {
      font-size: calc(1px + 1vw);
      border: 1px solid black;
      margin: 1vh 1vw;
    }

    td {
      font-size: calc(1px + 1vw);
      border: 1px solid black;
      margin: 1vh 1vw;
    }
  }
`;

// StyledCalculator (for the calculator div, not present in your TSX yet but included in HTML)

export default function Projects() {
  return (
    <StyledMain>
      <h1 id="title">Projects</h1>
      <div id="main">
        <div id="text">
          <StyledTable>
            <tr>
              <th>Project Name</th>
              <th>Topic</th>
            </tr>
            <tr>
              <td>Q-Learning PACMAN</td>
              <td>Deep Learning</td>
            </tr>
            <tr>
              <td>Iris Prediction Model </td>
              <td>Machine Learning</td>
            </tr>
            <tr>
              <td>Naive Bayes Real Estate Model</td>
              <td>Machine Learning</td>
            </tr>
          </StyledTable>
        </div>
      </div>
      {/* Assuming Calculator component handles its own styling or you might want to wrap it */}
     <Calculator/>
    </StyledMain>
  );
}