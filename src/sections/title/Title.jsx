import React from 'react';
import { Column, Section } from '../../components/utils-components';
import NameTitle from './main-title/NameTitle';
import SubTitle from './main-title/SubTitle';
import Windows from './second-title/Windows';
import { useInView } from 'react-intersection-observer'
import {CSSTransition} from 'react-transition-group'; 


const Title = ()=>{
    const {ref, inView} = useInView({ threshold: .3})

    return(
        <Section ref={ref} className={`title-cont`}>
            {/* <CSSTransition in={inView} timeout={250} classNames="title-cols"> */}
                
                <Column  jContent="flex-start" width={50} align={"flex-end"} className="name-title">
                        <div className="name-cont">
                            <NameTitle className="name-cont" cursor={true}>JOHNDEL ENCABO</NameTitle>
                            <SubTitle data-rate=".7" className='scroll'>/ web developer / python scripter</SubTitle>
                            {/* <Button animate={true} color="#272727">See More</Button> */}
                        </div>
                </Column>
            {/* </CSSTransition> */}
            
            <CSSTransition in={inView} timeout={250} classNames="title-cols" >

                <Column jContent="center" align="none" width={50} className="portfolio-title" >
                    <Windows></Windows>
                </Column>
            </CSSTransition>
            
            <CSSTransition in={inView} timeout={250} classNames="title-cols">
            
                <Column  jContent="flex-end" width={50} align="flex-start" className="social-col scroll">
                        <div  className="social-cont">
                            <a data-rate="-.8"  className='social-link scroll' href="http://fb.me/johndel.En13"><SubTitle className='social-link'>@johndel.En13</SubTitle></a>
                            <a data-rate="-.6"  className='social-link scroll' href="http://instagram.com/thejohnds"><SubTitle className='social-link'>@thejohnds</SubTitle></a>
                            <NameTitle data-rate="-.4" className="social-title scroll" cursor={false}>Social-Media</NameTitle>
                        </div>
                        
                </Column>
            </CSSTransition>
            

        </Section>
    )
}
export default Title;
// ${inView? "fade": ""}