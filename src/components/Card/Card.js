import React from "react";
import './Card.css'

export default function Card(props){
    let classCSS = "Card " + props.data.title.replace(' ','-')
    return (
        <div className={classCSS}>{props.data.title}</div>
    )
}