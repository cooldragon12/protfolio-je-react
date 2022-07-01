
import styled from 'styled-components';

const Column = styled.div`
    display:flex;
    align-items: ${({align}) => align? align:"center"};
    justify-content:${({jContent}) => jContent? jContent:"center"};
    width:${props => props.width}%;
    flex-direction: column;
`

export default Column;