import React, { useState, useEffect } from 'react';

export default function UseEffect() {

    const [counter, setCounter] = useState(1);
    const [name, setName] = useState("Akshay");

    useEffect(() => {
        document.title = `You clicked ${counter} times`
        console.log(`UseEffectCalled : ${counter}`);
    }, [name]);

    /*
        No Dependency Array -> Called After Every Render
        Empty Dependeny Array -> Called Just After First Render
        With Dependency Array -> Called on First Render & After that only after items inside Dependency Array Changes
    */

    return (
        <div>
            This is a example of useState Hook.
            <br />
            <br />
            Button Clicked - {counter} times!
            <br />
            <br />
            My name is {name}!
            <br />
            <br />
            <button onClick={() => setCounter(counter + 1)}>Update Counter</button> {/* State Updation in Functional Components */}
            <br />
            <br />
            <button onClick={() => setName("Vaibhav")}>Update Name</button> {/* State Updation in Functional Components */}
        </div>
    );
}