import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div className="display">
                <div className='text-operation'>{this.props.text}</div>
                <div className='value-operation'>{this.props.value}</div>
            </div>
        );
    }
}

export default Display;