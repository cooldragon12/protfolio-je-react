import styled from "styled-components";

const Cont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:6em;
    height:2em;
    background-color:#FFF1CE;
    border-radius: 16px;
    margin: 0.3rem;
`
const DeleteButton = styled.div`
    width:10%;
    height:60%;
    
`
const Tag = ({name,others, action}) =>{

    return(
        <Cont data-value={name}  id="tag" {...others}>
            <p>{name}</p>
            <DeleteButton  onClick={action}>x</DeleteButton>
        </Cont>
    )
}
export default Tag;