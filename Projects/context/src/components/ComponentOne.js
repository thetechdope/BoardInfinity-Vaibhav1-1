import React from 'react';
import ComponentTwo from './ComponentTwo';

class ComponentOne extends React.Component {

    state = { textValue: '' }

    handleTextChange = (value) => {
        this.setState({ textValue: value });
    }

    render() {
        return (
            <div>
                Hi, I'm Component One.
                <br />
                Value from Component Two : {this.state.textValue}
                <br />
                <ComponentTwo handleTextChangeCallback={this.handleTextChange} />
            </div>
        );
    }
}

export default ComponentOne;