import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Console = styled.div`
    display:flex;
    background-color: #fff;
    height:95%;
    color:#fff;
    flex-wrap:wrap;
    transform-style: preserve-3d;

`
const Ribbon =  styled.div`
    background-color: rgb(0, 0, 0);
    height:5%;
    display:flex;
    justify-content:right;
`
const ButtonCont = styled.div`
    width:30%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:right;
    margin-right:1%;
`
const Button = styled.div`
    width:10%;
    height:60%;
    border-radius: 250px;
    background-color:${props => props.color};
    margin: 0% 2.5%
`
const Side0 = styled.div`
    --i:0;
    transform-style: preserve-3d;
    background-color: #000;
    width:100%;
    height:100%;
    transform:translateZ(10px);
    position: absolute;
    top:0;
    left:0;
`
const Side1 = styled.div`
    --i:1;
    transform-style: preserve-3d;
    // background-color: rgb(46, 46, 46);
    border:2px solid #000;

    width:5%;
    height:100%;
    transform:rotateY(calc(90deg * var(--i))) ;
    position: absolute;
    top:0;
    right:-3%;
`
const Side2 = styled.div`
    --i:3;
    transform-style: preserve-3d;
    // background-color: rgb(46, 46, 46);
    border:2px solid #000;

    width:5%;
    height:100%;
    transform:rotateY(calc(90deg * var(--i))) ;
    position: absolute;
    top:0;
    left:-2.5%;
`
const Side3 = styled.div` 
    transform-style: preserve-3d;
    // background-color: rgb(46, 46, 46);
    border:2px solid #000;

    width:100%;
    height:5%;
    transform:rotateX(90deg) ;
    position: absolute;
    bottom:-3.5%;
    left:0%;
`
const Container = styled.div`
    font-family:'HACKED';
    display: block;
    width: 30rem;
    height: 55%;
    border-radius: 4px;
    transition: transform 0.2s, box-shadow .15s ;
    position:relative;
    transform-style: preserve-3d;
    transform-origin:center;
    box-shadow: 15px 15px 50px #d6d6d6;
    z-index:5;
`

const Windows = ()=>{
    const [xy, setXY] = useState({x:0, y:0})

    const handleMouseMove = useCallback((e)=>{
            var x = e.pageX - document.getElementById("Console").offsetLeft;
            var y = e.pageY - document.getElementById("Console").offsetTop;
            // Origins
            const originX = document.getElementById("Console").offsetLeft/2;
            const originY = document.getElementById("Console").offsetTop/2;
            setXY({x:x < originX ? x+originX : -(x+originX), y:y < originY?y+originY:(y-originY*1.5)})
    },[setXY])
    useEffect(()=>{
        
    },[handleMouseMove])
    return(
        <Container data-rate=".3" className='Console' id="Console" onMouseMove={handleMouseMove} style={{transform: 'rotateY('+(xy.x/15)+'deg) rotateX('+(xy.y/15)+'deg)'}}>
            <Side0 >
                <Ribbon>
                    <ButtonCont>
                        <Button color="#142F43" />
                        <Button color="#FFAB4C"/>
                        <Button color="#FF5F7E"/>
                    </ButtonCont>
                </Ribbon>
                <Console id="console-main">
                    <div className="item i1">REACT</div>
                    <div className="item i2">DJANGO</div>
                    <div className="item i3">PYTHON</div>
                    <div className="item i4">JAVASCRIPT</div>
                </Console>
            </Side0>
            <Side1 />
            <Side2 />
            <Side3/>
        </Container>
    )
}

export default Windows;