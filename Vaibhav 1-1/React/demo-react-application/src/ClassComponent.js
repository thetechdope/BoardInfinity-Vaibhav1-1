import React from 'react';
class InnerComponent extends React.Component {
    render() {
        return (
            <div>
                I'm a Inner Component.
            </div>
        );
    }
}
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { firstName: "Vaibhav", lastName: "Tayade" }
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    render() {
        console.log("Render Block");
        return (
            <div>
                My name is {this.props.firstName} {this.props.lastName}
                <br />
                <InnerComponent />                
            </div>
        );
    }
}

export default ClassComponent;