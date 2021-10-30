import React from "react";

class ComponentWillUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
        console.log("Constructor");
    }
    delHeader = () => {
        this.setState({ show: false });
        console.log("Delete Header");
    }
    render() {
        console.log("Render 1");
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    render() {
        console.log("Render 2");
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default ComponentWillUnmount;