import React from 'react';
import { connect } from 'react-redux';

class Display extends React.Component {
    render () {
        return (
            <div className="display">
                <div className='text-operation'>{this.props.text}</div>
                <div className='value-operation'>{this.props.value}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        text: state.text,
        value: state.value
    };
};

export default connect(mapStateToProps)(Display);