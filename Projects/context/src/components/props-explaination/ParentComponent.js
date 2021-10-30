import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    return (
        <div>
            This is a Parent Component.
            <ChildComponent selectedColor={`orange`} />
        </div>
    );
}

export default ParentComponent;