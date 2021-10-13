import React from "react";

class LifeCycleMethods extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "Vaibhav",
            lastName: "Tayade",
            city: "Pune"
        }
        console.log("City : ", this.state.city);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ city: "Meerut" });
            console.log("City : ", this.state.city);
        }, 5000);
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

export default LifeCycleMethods;