import React, { Component } from 'react';
class Flower extends Component {
    render() {
        const { color } = this.props;
        return <div>
            <h2>
                "This is a {this.props.color } Flower!"
            </h2></div>
    }
}
export default Flower;