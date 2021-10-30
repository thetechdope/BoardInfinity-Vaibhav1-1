import React from "react";

const GrandChildComponent = (props) => {
    return (
        <div>
            This is a GrandChild Component.
            <br />
            <span style={{ color: props.color }}> I got this color </span>
        </div>
    );
}

export default GrandChildComponent;