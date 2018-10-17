import React from 'react';
import { connect } from 'react-redux';
import Display from './Display';
import Keyboard from './Keyboard';
import AdminForm from './AdminForm';
import { getUserRole } from '../utils';
import { computeText, randomText } from '../redux/actions';
import { USER_ROLES, KEY_CODES } from '../constants';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown (event) {
        if (event.keyCode === KEY_CODES.SPACE && typeof(this.props.onRandomCompute) === 'function' && getUserRole() === USER_ROLES.DEVELOPER) {
            event.preventDefault();
            this.props.onRandomCompute();
        }
    }

    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    render () {
        return (
            <div className="app">
                <div className="calculator">
                    <Display />
                    <Keyboard />
                </div>
                {this.props.displayAdminForm && <AdminForm />}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        displayAdminForm: state.displayForm
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRandomCompute: () => {
            dispatch(randomText());
            dispatch(computeText());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);