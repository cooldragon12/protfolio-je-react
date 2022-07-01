import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:400px;
    width:300px;
    border-radius:16px;
    box-shadow: 15px 15px 50px #d6d6d6;
    display:flex;
    flex-direction:column;
    z-index:1;
    margin: 0 3%;
    
    
`
const Image = styled.img`
    width:35%;

`
const ImgCont = styled.div`
    height:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const DescCont = styled.div`
    height:50%;
    display:flex;
    align-items:center;
    flex-direction: column;
`
const Desc = styled.p`
    width:80%;
    font-size:12px;
    text-align:center;
    letter-spacing:1px;

` 
const Head =styled.h1`
    color: #424242;
    // -webkit-text-fill-color: #424242;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(46,46,46);
    letter-spacing:2px;
    margin:1% 0;
`
const Card =(props)=>{
    return(
        <Container className={`Card ${props.add}`}>
            {
                // Title | Word 
            }
            <ImgCont className="img-cont">
                <Image src={props.image}/>
            </ImgCont>
            {
                // Brief Statement
            }
            <DescCont className="desc-cont">
                <Head>{props.head}</Head>
                <Desc>{props.children}</Desc>
            </DescCont>
        </Container>
    )
}
export default Card;