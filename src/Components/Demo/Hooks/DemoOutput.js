import React from 'react';

const DemoOutput = (props) => {
    console.log("Demo Output");
    return (
        <div>
            {props.show && <p>Some coool content here</p>}
        </div>
    );
}

export default React.memo(DemoOutput);

// props.show === props.prev.show