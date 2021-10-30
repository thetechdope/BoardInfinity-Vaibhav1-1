import React from "react";

class HeaderGetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.myColor };
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
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

export default HeaderGetDerivedStateFromProps;