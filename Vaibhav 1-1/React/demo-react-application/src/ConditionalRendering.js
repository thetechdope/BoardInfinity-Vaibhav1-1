import React from "react";

export default class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    changeColor = () => {
        if (this.state.favoritecolor === "red") {
            this.setState({ favoritecolor: "blue" });
        } else {
            this.setState({ favoritecolor: "red" });
        }
    }
    provideDifferentColor = () => {
        if (this.state.favoritecolor === "red") {
            return "blue";
        } else {
            return "red";
        }
    }
    render() {
        return (
            <div>
                <h1>My color preference</h1>
                {this.state.favoritecolor == "red" && <h1 style={{ color: "red" }}>Red</h1>}
                {this.state.favoritecolor == "blue" && <h1 style={{ color: "blue" }}>Blue</h1>}
                <button type="button" onClick={this.changeColor} style={{ color: this.provideDifferentColor() }}>{`Change colour to ${this.provideDifferentColor()}`}</button>
            </div>
        );
    }
}
