import React from "react";

class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
        console.log("Constructor");
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 5000)
        console.log("ComponentDidMount");
    }
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
        console.log("ComponentDidUpdate");
    }
    render() {
        console.log("Render");
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="mydiv"></div>
            </div>
        );
    }
}

export default ComponentDidUpdate;
