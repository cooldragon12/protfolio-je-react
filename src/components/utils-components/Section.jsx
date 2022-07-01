
import styled from 'styled-components';



const Section = styled.div`
    display: flex;
    flex-direction: ${props =>props.flex};
    height:96.5vh;
    flex-wrap: ${({wrap}) => wrap ? "wrap": "none"};
    
`

export default Section;