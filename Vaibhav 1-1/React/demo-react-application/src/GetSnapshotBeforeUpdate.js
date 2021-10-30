import React from "react";

class GetSnapshotBeforeUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red", previousFavoriteColor: "" };
        console.log('Constructor');
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 4000)
        console.log('ComponentDidMount');
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
        console.log('GetSnapshotBeforeUpdate');
        //this.setState({ previousFavoriteColor: prevState.favoritecolor })
        return prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
        console.log('ComponentDidUpdate');
    }
    render() {
        console.log('Render');
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <h1>My Previous Favorite Color is {this.state.previousFavoriteColor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

export default GetSnapshotBeforeUpdate;
