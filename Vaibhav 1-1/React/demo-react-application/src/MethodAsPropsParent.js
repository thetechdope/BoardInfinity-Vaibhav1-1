import React from 'react';
import MethodAsPropsChild from './MethodAsPropsChild';

class MethodAsPropsParent extends React.Component {

    state = {
        name: "",
    }

    handleCallback = (childData) => {
        this.setState({ name: childData })
    }

    // Example Of Child To Parent Communication

    render() {
        return (
            <div>
                <MethodAsPropsChild parentCallback={this.handleCallback} /> {/* Example Of Method As Props */}
                {this.state.name}
            </div>
        )
    }
}
export default MethodAsPropsParent;