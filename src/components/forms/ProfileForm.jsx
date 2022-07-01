import '../../static/css/Form/form.css'
import {TagInput} from '../utils-components'
const { useState, useEffect } = require("react")
export const ProfileForm = ()=>{
    const [skills, setSkills] = useState([]);
   
    return(
        <form id="profile-form">
            <h1 className="maintitle">Setting Profile</h1>
            <div className="container">
                <h2 className="subtitle">Set Profile Name</h2>
                <input type="text" name="name" placeholder="Name" id="name" className="txt-normal" />
            </div>
            <div className="container">
                <h2 className="subtitle">Add Skills</h2>
                <TagInput name={"skills"} list={skills} setList={setSkills}/>
            </div>
            <div className="container">
                <h2 className="subtitle">Add Education</h2>
                {// Multiple Input 
                }
                <div className="multiple-input-main">
                    <div className="input-course">
                        <input type="text" name="course" id="course" />
                    </div>
                    <div className="input-school">
                        <input type="text" name="school" id="school" />
                    </div>
                    <div className="input-year">
                        <input type="text" name="year" id="year" />
                    </div>
                </div>
            </div>

        </form>
    )
}