import React from 'react';
import { useInView } from 'react-intersection-observer'

import { codeImage, designImage, ideaImage } from '../../assets/img';
import { Card, Section } from '../../components/utils-components';
import {CSSTransition} from 'react-transition-group'; 


const Description = ()=>{
    const {ref, inView} = useInView({ threshold: .6})
    
    
    return(
        <Section ref={ref} wrap={`true`} className="description-cont">
            <CSSTransition in={inView} timeout={500} classNames="Card" unmountOnExit>
                <Card image={ideaImage} head="Idea">
                    Mind-blowing ideas always on mind. Always Seeking for new. Mesmerize in new things
                </Card>
            </CSSTransition>
            <CSSTransition in={inView} timeout={500} classNames="Card" unmountOnExit>
                <Card  image={designImage} head="Design">
                    Ideas make into design, and always gets the trend on works. 
                </Card>
            </CSSTransition>
            <CSSTransition in={inView} timeout={500} classNames="Card" unmountOnExit>
                <Card  image={codeImage} head="Code">
                    Code in flexible way. Coding for fun.
                </Card>
            </CSSTransition>
        </Section>
    )
}
export default Description;

// add={inView? "visible":""} 