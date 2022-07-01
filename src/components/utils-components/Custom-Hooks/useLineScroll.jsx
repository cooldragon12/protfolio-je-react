import {useCallback, useEffect, useState,useRef} from 'react';

const useLineScroll = ({threshold=0.7, reverse=false})=>{
    /**
     * React Hooks make it easy create scrollable line
     * Assign the `ref` to the DOM element path of svg
     * then assign `scrollable` to the parent where the scroll is. By putting it inside `onScroll` event to capture the percentage. 
    

     * Requirement in a DOM:
     - Need the svg path will need inside a div
        Sample:
        <div className="<class name>">
            <svg>
                <path ref={ref} />
            </svg>
        </div>
    
     */
    
    const ref = useRef(null);
    const [path, setPath] =useState(0);
    
    const scroller = useCallback((e)=>{
        // console.log("onScroll: "+( e.target.scrollTop*.9)/(e.target.scrollHeight-e.target.clientHeight));
        var scrollPercent=0.0;
        if (!reverse)
            scrollPercent = ( e.target.scrollTop*threshold)/(e.target.scrollHeight-e.target.clientHeight);
        else
            scrollPercent =  (e.target.scrollTop*threshold)/(e.target.scrollHeight-e.target.clientHeight) - 1;
        var draw = path * scrollPercent;
        // console.log("draw: " + draw + "scroll%: " + scrollPercent)
        ref.current.style.strokeDashoffset = path-draw;
        
        // console.log(ref.current.style.strokeDashoffset);
    },[path, ref, threshold, reverse])
    useEffect(()=>{
        setPath(ref.current.getTotalLength());
        ref.current.style.strokeDasharray = path + ' ' + path;
        ref.current.style.strokeDashoffset = path;
        console.log(path);
        
    }, [path, scroller])
    return {ref, scroller};
}
export default useLineScroll;