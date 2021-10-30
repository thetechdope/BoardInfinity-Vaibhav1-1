import React, { useState } from 'react';

function UseState(props) {

    /*        
        state = { favoritecolor: "red" };
        this.setState({ favoritecolor: "yellow" });  (State Updation in Class Components)
    */

    const [firstName, setFirstName] = useState("Vaibhav");

    return (
        <div>
            This is a example of useState Hook.
            <br />
            <br />
            My name is {firstName}!
            <br />
            <br />
            <button onClick={() => setFirstName("Akshay")}>Click Me!</button> {/* State Updation in Functional Components */}
        </div>
    );
}

export default UseState;