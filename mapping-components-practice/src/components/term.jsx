import React from "react";
import Emoji from "./emoji";

function Term(props) {
   return (
        <div className="term">
          <dt>
            <Emoji emojiName={props.emoji}/>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
   );
}

export default Term;