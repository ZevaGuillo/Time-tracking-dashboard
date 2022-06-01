import React from "react";
import './Card.css';
import ellipsis from '../../images/icon-ellipsis.svg'

export default function Card(props){
    let classCSS = "Card " + props.data.title.replace(' ','-')
    return (
        <div className={classCSS}>
            <div></div>
            <div>
                <div>
                    <h3>{props.data.title}</h3>
                    <img src={ellipsis} alt='ellipsis'/>
                </div>
                <div>
                    {props.timeView}
                </div>
            </div>
        </div>
    )
}