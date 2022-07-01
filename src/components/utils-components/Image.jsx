import styled from "styled-components";

const Image = styled.div`
    background-image:url(${({source})=>source});
    background-size:${({size})=>size?size:'contain'};
    background-position:${({position})=>position?position:'center'};
    background-repeat:no-repeat;
`
export default Image;