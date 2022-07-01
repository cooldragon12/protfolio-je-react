
import styled, {keyframes} from 'styled-components';
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
const Button = styled.button`
    padding: 1rem 1rem;
    border:2px solid ${props => props.color};
    color:#f1f1f1;
    opacity:0;
    visibility:hidden;
    transform: translateX(1rem);
    background-color: ${props => props.color};
    transition: background-color .2s ease-in-out;
    animation: ${animation} .2s ease-out 3s forwards;
    &:hover{
        cursor: pointer;
        color:${props => props.color};

        background-color: #fff;
    }
`
export default Button;