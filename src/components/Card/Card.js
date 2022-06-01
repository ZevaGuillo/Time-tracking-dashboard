import React from "react";
import './Card.css';
import ellipsis from '../../images/icon-ellipsis.svg';
import work from '../../images/icon-work.svg';
import play from '../../images/icon-play.svg';
import study from '../../images/icon-study.svg';
import exercise from '../../images/icon-exercise.svg';
import social from '../../images/icon-social.svg';
import selfCare from '../../images/icon-self-care.svg';

export default function Card(props){

    let timeframe = props.timeView.toLowerCase()
    let currentHours = props.data.timeframes[timeframe].current
    let previousHours = props.data.timeframes[timeframe].previous

    let classCSS = "Card " + props.data.title.replace(' ','-')
    return (
        <div className={classCSS}>
            <div className="card-nav">
                
                <img src={getIcon(props.data.title)}/>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{props.data.title}</h3>
                    <img src={ellipsis} alt='ellipsis'/>
                </div>
                <div className="times">
                    <p className="currentHours">{currentHours}hrs</p>
                    <p className="previousHours">{getTimeViewText(timeframe)} - {previousHours}hrs</p>
                </div>
                
            </div>
        </div>
    )
}
function getIcon(cardName){
    switch(cardName){
        case 'Work': return work;
        case 'Play': return play;
        case 'Study': return study;
        case 'Exercise': return exercise;
        case 'Social': return social;
        case 'Self Care': return selfCare;
        default: return undefined;
    }
}

function getTimeViewText(timeView){
    switch(timeView){
        case 'daily':
            return 'Yesterday';
        case 'weekly':
            return 'Last week';
        case 'monthly':
            return 'Last month';
        default:
            return ''
    }
}
