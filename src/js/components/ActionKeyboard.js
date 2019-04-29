import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { clearText, computeText, toggleForm } from '../redux/actions';
import { getUserRole } from '../utils';
import { USER_ROLES } from '../constants';

class ActionKeyboard extends React.Component {

    renderButton (i, onClick) {
        return <Button
            className="action-btn"
            value={i}
            onClick={() => onClick(i)}
        />;
    }

    render () {
        const userIsAdmin = getUserRole() === USER_ROLES.ADMIN;
        
        return (
            <div className="action-keyboard flex-row-container">
                {userIsAdmin && this.renderButton('List', this.props.onListClick)}
                {this.renderButton('C', this.props.onClearClick)}
                {this.renderButton('=', this.props.onComputeClick)}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClearClick: () => dispatch(clearText()),
        onComputeClick: () => dispatch(computeText()),
        onListClick: () => dispatch(toggleForm())
    };
};

export default connect(null, mapDispatchToProps)(ActionKeyboard);