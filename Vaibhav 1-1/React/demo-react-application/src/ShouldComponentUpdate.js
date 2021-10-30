import React from "react";

class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
        console.log("Color : ", this.state.favoritecolor);
    }

    shouldComponentUpdate() {
        return true;
    }

    changeColor = () => {
        setTimeout(() => {
            this.setState({ favoritecolor: "blue" });
            console.log("Color : ", this.state.favoritecolor);
        }, 0);
    }

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

export default ShouldComponentUpdate;