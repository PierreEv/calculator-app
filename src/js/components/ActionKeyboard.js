import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { clearText, computeText } from '../redux/actions';

class ActionKeyboard extends React.Component {

    renderButton (i, onClick) {
        return <Button
            className="action-btn"
            value={i}
            onClick={() => onClick(i)}
        />;
    }

    renderClearButton (i) {
        return this.renderButton(i, this.props.onClearClick);
    }

    renderComputeButton (i) {
        return this.renderButton(i, this.props.onComputeClick);
    }

    render () {
        return (
            <div className="action-keyboard flex-row-container">
                {this.renderComputeButton('=')}
                {this.renderClearButton('C')}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClearClick: () => dispatch(clearText()),
        onComputeClick: () => dispatch(computeText())
    };
};

export default connect(null, mapDispatchToProps)(ActionKeyboard);