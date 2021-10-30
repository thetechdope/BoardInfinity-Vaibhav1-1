import React from "react";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => {
    return (
        <div>
            This is a Child Component.
            <GrandChildComponent color={props.selectedColor} />
        </div>
    );
}

export default ChildComponent;