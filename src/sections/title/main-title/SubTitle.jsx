import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    from{
        opacity:0;
        visibility:hidden;
        transform: translateX(1rem);
    }to{
        opacity:1;
        visibility:visible;
        transform: translateX(0rem);
    }
`
const SubTitle = styled.h2`
    font-size: 15px;
    font-style: italic;
    font-weight: 500;
    color: #777777;
    opacity:0;
    transform: translateX(1rem);
    animation: ${animation} .6s ease-out 3s forwards;
`

export default SubTitle;