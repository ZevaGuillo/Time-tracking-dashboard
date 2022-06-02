import React from "react";
import './UserCard.css';
import profile from "../../images/image-jeremy.png"

export default function UserCard(props){

    const [labelActive,setLabelActive] = React.useState({
        Daily:false,
        Weekly:true,
        Monthly:false
    })

    const handleTimeView = (e)=>{
        props.ChangeTimeView(e.target.textContent);
        let stateobject = getObjectTimeView(e.target.textContent);
        setLabelActive(stateobject);
    }


    return (
        <div className="UserCard">
            <div className="usercard-header">
                <img src={profile} alt='Usercard'/>
                <div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="timeViews">
                <label onClick={handleTimeView} className={labelActive['Daily'] ? 'labelActive':''}>Daily</label>
                <label onClick={handleTimeView} className={labelActive['Weekly']? 'labelActive':''}>Weekly</label>
                <label onClick={handleTimeView} className={labelActive['Monthly']? 'labelActive':''}>Monthly</label>
            </div>

        </div>
    )
}

function getObjectTimeView(timeView){
    switch(timeView){
        case 'Daily':
            return {
                Daily:true,
                Weekly:false,
                Monthly:false
            }
        case 'Weekly':
            return {
                Daily:false,
                Weekly:true,
                Monthly:false
            }
        case 'Monthly':
            return {
                Daily:false,
                Weekly:false,
                Monthly:true
            }
    }
}