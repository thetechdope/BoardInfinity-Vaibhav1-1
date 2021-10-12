import React from "react";

class MyComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "Vaibhav",
            lastName: "Tayade",
            city: "Pune"
        }
    }

    updateCity = () => {
        this.setState({ city: "Shegaon" });
    }

    render() {
        return (
            <div>
                <h1>I'm {this.state.firstName} {this.state.lastName}, and I am from {this.state.city}!</h1>
                <button onClick={this.updateCity}>Update City!</button>
            </div>
        );
    }
}

export default MyComponent;