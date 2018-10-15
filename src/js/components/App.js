import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import AdminForm from './AdminForm';
import { getUserRole } from '../utils';
import { USER_ROLES, KEY_CODES } from '../constants';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = { displayAdminForm: false };
    }

    handleKeyDown (event) {
        if (event.keyCode === KEY_CODES.H && getUserRole() === USER_ROLES.ADMIN) {
            event.preventDefault();
            this.setState({ displayAdminForm: !this.state.displayAdminForm });
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
            <div className='app'>
                <Display />
                <Keyboard />
                {this.state.displayAdminForm ? <AdminForm /> : null}
            </div>
        );
    }
}

export default App;