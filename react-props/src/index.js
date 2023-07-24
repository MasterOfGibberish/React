import React from "react";
import ReactDOM from "react-dom";

function Card (props) {  
  return <div>
    <h2 className="myClass">{props.name}</h2>
    <img 
      src={props.img}
      alt="avatar_img"
    ></img>
    <p>{props.number}</p>
    <p>{props.gmail}</p>
  </div>
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Byounce" number="+123 456 789" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" gmail="b@beyonce.com"/>

     <Card name="Jack Bauer" number="+987 654 321" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
     gmail="jack@nowhere.com"/>

     <Card name="Chuck Norris" number="+918 372 574" 
     img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" gmail="gmail@chucknorris.com"/>

  </div>,
  document.getElementById("root")
);
