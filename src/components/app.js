import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        let newCount = this.state.count;
        newCount += 1;
        this.setState({ count: newCount })
    }

    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton handleClick={this.handleClick}/>
            </div>
        );
    }
}
