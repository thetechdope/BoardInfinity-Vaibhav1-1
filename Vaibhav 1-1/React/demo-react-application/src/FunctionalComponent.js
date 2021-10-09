import React from 'react';
import ClassComponent from './ClassComponent';

function FunctionalComponent(props) {
    return (
        <div>
            Hello, my name is {props.name}!
            <ClassComponent />
        </div>
    );
}

export default FunctionalComponent;