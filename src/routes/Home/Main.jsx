import React, {useEffect} from 'react';
import {Projects, Description, Title} from '../../sections'
// import { LineScrolling } from '../../components/utils-components';
const Main = ()=>{
    const handleScroll = ()=>{
        // document.getElementById("Console").removeEventListener("mousemove",handleMouseMove);
        // Window
        const consoles = document.getElementById("Console");
        
        const scrolla = document.getElementById("main-cont").scrollTop;
        let pos_wind  = scrolla*consoles.dataset.rate;
        const target =  document.querySelectorAll('.scroll');

        consoles.style.transform = `translate3d(0px, ${pos_wind}px, 0px) rotateY(${pos_wind%180}deg)`
        for(var i = 0; i < target.length; i++){
            var pos = scrolla*target[i].dataset.rate;
            target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`

        }
    }
    useEffect(()=>{
        document.getElementById("main-cont").addEventListener("scroll", handleScroll);
        
        
    })
    return(
        <>

            <section id="Title" className="main-title main">
                <Title/>
            </section>
            <section id="Description" className="main-descriptions main">
                <Description/>
            </section>
            <section className="main-project">
                <Projects/>
            </section>
            
        </>
    )
}
export default Main;