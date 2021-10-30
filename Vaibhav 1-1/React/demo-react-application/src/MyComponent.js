import React from "react";

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "Vaibhav",
            lastName: "Tayade",
            city: "Pune"
        }
        console.log("City : ", this.state.city);
    }

    // static getDerivedStateFromProps(props) {
    //     console.log("City : ", props.myCity);
    //     return { city: props.myCity }
    // }

    updateCity = () => {
        this.setState({ city: "Shegaon" });
        console.log("City : ", this.state.city);
    }

    componentDidMount() {
        this.setState({ city: "Meerut" }); // Async Call
        console.log("City : ", this.state.city);
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