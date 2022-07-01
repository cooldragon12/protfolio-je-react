
import styled from 'styled-components';

const Row = styled.div`
    display:flex;
    align-items: ${({align}) => align? align:"center"};
    justify-content:${({jContent}) => jContent? jContent:"center"};
    width:${({size})=> size? size: 100}vw;
    flex-direction: row;
`

export default Row;