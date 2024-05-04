import React from "react";
import './app.css'

function Card(props){
    return (
        <div className=" card rounded-lg shadow-md p-4 w-80 h-96 ">
            <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
            <p className="text-gray-200">{props.description}</p>
        </div>
    )
}
export default Card