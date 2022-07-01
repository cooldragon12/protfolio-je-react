import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
const Title = styled.h1`
    
    font-size: ${1.25*40}px;

    color: #424242;
    margin: 0;
`;
const blinker = keyframes`
from{
    visibility:hidden;
    color: #ffff;
    background-color:#000;
}
to{
    color: #424242;
    visibility:visible;
    background-color:transparent;
}
`
const LetterAppear = styled.span`
    opacity: 1;
    visibility:hidden;
    animation: ${blinker} .2s forwards;
`
const Cursor = styled.span`
    width:100%;
    height:100%;

    background-color:#00000;
    animation: ${blinker} .8s infinite;
`


const NameTitle = (props)=>{
    const [txts, setTxts] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        var txt = (props.children);
        const splitted = txt.split(" ")
        setTxts(splitted);
        setCount(splitted.length);
    }, [props.children, setTxts]);

    return(
        <div className={props.className}>
            {
                txts.map((txt,i) =>{
                    return(
                    <Title key={i}>
                        {
                            txt.split("").map((char, index)=>{
                                if(i === count-1 && index === txt.length -1 && props.cursor)
                                    {return <LetterAppear key={index} style={{animationDelay: (1.5+i+index/12)+"s"}}><Cursor style={{animationDelay: (1.5+i+index/10)+"s"}}>{char}</Cursor></LetterAppear>}
                                return <LetterAppear key={index} style={{animationDelay: (1.5+i+index/12)+"s"}}>{char}</LetterAppear>
                            })
                        }
                    </Title>)
                })
            }
        
        </div>
    )
}
export default NameTitle;