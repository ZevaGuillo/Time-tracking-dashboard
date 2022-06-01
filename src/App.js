import React from "react";
import Card from "./components/Card/Card";
import UserCard from "./components/UserCard/UserCard";
import data from "./data.json";


function App(){
    const [timeView, setTimeView] = React.useState(''); 

    const generateGridCard = ()=>{
        let userCard = [<UserCard key='Jeremy'/>];

        let dataCards = data.map((d,index) => {
            return <Card data={d} key={index+d.title} />
        })
        return userCard.concat(dataCards);
    }

    return(
        <div className="App">
            {generateGridCard()}
        </div>
    )
}


export default App;
