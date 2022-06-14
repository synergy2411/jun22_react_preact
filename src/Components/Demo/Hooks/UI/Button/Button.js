import React from 'react';

const Button = (props) => {
    console.log("Button");
    return (
       <button 
        className={props.className}
        style={{'backgroundColor' : "rosybrown", borderRadius :"10px"}}
        onClick={props.onClick}>
            {props.children}</button>
    );
}

export default React.memo(Button);
