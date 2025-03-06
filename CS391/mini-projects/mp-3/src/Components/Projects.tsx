
import StyledMain from './styledcomponents/StyledMain';
import StyledTable from './styledcomponents/StyledTable';
import StyledText from './styledcomponents/StyledText';
import Calculator from './Calculator';




export default function Projects(){

return(
    <StyledMain>
        <h1>Projects</h1>

        
        
        <StyledTable>
           <StyledText>
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
            </StyledText>
        </StyledTable>
        <Calculator/>

    </StyledMain>


);


}