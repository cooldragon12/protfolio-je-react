import React from 'react';
import {SocialMedias, AboutContent, Item, ItemGallery} from './utilityComponents';
// import {CSSTransition} from "react-transition-group"

import logo from './static/JE_Logo.svg';
import facebook from './static/facebook.svg'
import twitter from './static/twitter.svg'
import github from './static/github-sign.svg'
import instagram from './static/instagram.svg'

import './style.css'
import { CurrentItem, GalleryItem } from './item_query';

export class Page1 extends React.Component{
    render(){
        return(
            <div id="About" className="background-grade" style={{background: "radial-gradient(circle, rgba(32,32,32,1) 30%, rgb(18, 18, 18) 50%, rgba(0,0,0,1) 100%)"}}>
                <div className="filter" style={{backdropFilter: "blur(110px)"}}>
                    <LeftAbout />
                    <RightAbout />
                </div>
            </div>
        )
    }
}

const LeftAbout=()=> {
        const socialIcon = [instagram, twitter, facebook, github]
        const socialMedia = ["https://www.instagram.com/thejohnds/","https://twitter.com/johndkalang","https://www.facebook.com/johndel.En13/","https://github.com/cooldragon12/"]
        const  about = ` Hi, I am Johndel Encabo, a Filipino Web Developer and UI Designer, I am currently on college, CS is my course. I indepently learning  React JS and Django is the Framework I use on my Projects. 
        I love macro photography, I  always taking of picture of small things
        I am passionate on what I am doing and any problem I encounter I definitly finding my solution. I keep on learning and studying things related to my field, at first planning was my weakness but that weakness became a strangth.`
        return(
            <div className="left">
                <div className="back-left" style={{backgroundImage: `url(`+logo+`)`}}></div>
                <h2 className="about-title">ABOUT</h2>
                <AboutContent content={about} id={"about-desc"}/>
                <div className="social-media-cont">
                    <SocialMedias icons={socialIcon} links={socialMedia}/>
                </div>
            </div>
            
        )
    
}
const RightAbout=()=>{
        return(
            <div className="right">
                <div className="right-up">
                    <div className="title">
                        <h2>JOHNDEL</h2>
                        <h1>PORTFOLIO</h1>
                    </div>
                    
                </div>
                <div className="right-down">
                    <div className="logo" style={{backgroundImage: "url('"+logo+"')"}}></div>
                </div>
            </div>
            
        )
    
}
export function Page2(){
    const [openItem1, setOpenItem1]=React.useState(false)
    const [openItem2, setOpenItem2]=React.useState(false)
    const closeThis1 = () => {
        setOpenItem1(false)
     };  
     const openThis1 = () => {
        setOpenItem1(true);
        setOpenItem2(false)
     };
     const closeThis2 = () => {
        setOpenItem2(false)
     };  
     const openThis2 = () => {
        setOpenItem2(true);
        setOpenItem1(false)

     };
    return(
            <div className="second-page">
                <ProjCont open={openItem1} click={openItem1 === false?openThis1:closeThis1}/>
                <GalleryCont open={openItem2} click={openItem2 === false?openThis2:closeThis2}/>
            </div>
        )
    
}
const ProjCont = (props) =>{
    
    return(
        <div id="Project" className={`left second1 ${props.open === true?"openSecond1":""}`} onClick={props.click}>
            <div className={`extr-title ${props.open === true?"openTitle":"title-cont"}`}>
                <h1 className={`title-proj`}>PROJECTS</h1>

            </div>

           <ItemCont open={props.open} selection="proj" dataList={CurrentItem}/>
    </div>
    )
}
const GalleryCont = (props) =>{
    
    return(
        <div id="Gallery" className={`right second2 ${props.open === true?"openSecond2":""}`}onClick={props.click}>
            <div className={`extr-title ${props.open === true?"openTitle":"title-cont"}`}>

            <h1 className={`title-gallery`}>GALLERY</h1>
            </div>
            <ItemCont open={props.open} selection="gallery" dataList={GalleryItem}/>
        </div>
    )
}
const ItemCont=(props)=>{
    var selected = props.selection
    const listItem = props.dataList
    var style = ""
    switch (selected){
        case "proj":
            style = "item-cont column-one"
            break
        case "gallery":
            style = "item-cont row-gallery"
            break
        default:
            style = "item-cont"
            break

    }
    
    return (
        
        <div className={`${style} ${props.open === true?"item-open":""}`}>
            {
                selected === "proj"?listItem.map((item, index)=>{
                    return <Item key={index} data={item}/>
                }):listItem.map((item, index)=>{
                    return <ItemGallery key={index} data={item}/>
                })
            }
        </div>
    )
}

