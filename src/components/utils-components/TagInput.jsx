import React, { useState, useEffect, useCallback } from 'react';
import Tag  from "./Tag";

const TagInput = ({list, setList, name})=>{
    
    const [rawInput, setRawInput] = useState("");
    const deleteHandler =useCallback ((e)=>{
        const index = list.indexOf(e.target.parentNode.dataset.value);
    
        list.splice(index,1);
        var newList = []
        for(let i = 0; i < list.length; i++)
            newList.push(list[i])
        setList(newList)
    }, [ list, setList])
    
    const addHandler = useCallback((e)=>{
        list.push(rawInput)
        setList(list)
        
        setRawInput("")
    }, [rawInput, setRawInput, list, setList])
    const typeHandler = (e)=>{
        
        setRawInput(e.target.value)
        
    }
    useEffect(()=>{
        // console.log("input:"+rawSkill)
        // console.log(skill)  
    },[ deleteHandler, addHandler])
    return(
        <div className="tag-main">
            <div className="tag-input-cont">

            <input type="text" name={name} value={rawInput} id="tag-input"  onChange={typeHandler}/>
            </div>
                <div className="tag-container">
                {
                    list.map((value, index)=>{
                        
                        return(
                            <Tag key={index} name={value} action={deleteHandler}/>
                        )
                    })
                }
                </div>
            <div className='tag-add-button' onClick={addHandler}>+</div>
        </div>
    )
}
export default TagInput