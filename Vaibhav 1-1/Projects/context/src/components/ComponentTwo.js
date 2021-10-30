import React from 'react';

class ComponentTwo extends React.Component {

    handleTextChange = (event) => {
        this.props.handleTextChangeCallback(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <input type="text" name="myName" placeholder="Enter Value" onChange={this.handleTextChange}></input>
            </div>
        );
    }
}

export default ComponentTwo;