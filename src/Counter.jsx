import {useState} from "react";

function init(){
    return Math.random();
}

export default function Counter(){
    
    let [count, setCount] = useState(init);        //in use state we are passing our values (initialisation)
    //  Don't pass init as a function pass it as a reference
    let incCount = () => {
        setCount(count + 1);        // re-render whole code except initialisation line 
        setCount((currCount) =>{    //Call back
            return currCount + 1;
        });
    }
    return(
        <>
            <h3>Count = {count}</h3>    
            <button onClick = {incCount}>Increase Count</button>
        </>
    )
};