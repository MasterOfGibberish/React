import React from "react";
import contacts from "../contacts";

function Avatar(props){
    return <img className="circle-img" src={props.imgURL} alt="avatar_img" />
}

export default Avatar;