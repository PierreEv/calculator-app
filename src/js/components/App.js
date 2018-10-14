import React from 'react';
import Display from './ConnectedDisplay';
import Keyboard from './ConnectedKeyboard';
import ConnectedAdminForm from './AdminForm';
import { getUserRole } from "../utils";

class App extends React.Component {

    constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {displayAdminForm: false};
    }

    handleKeyDown (event) {
        if(event.keyCode === 72 && getUserRole() === 'admin') {
            event.preventDefault();
            this.setState({displayAdminForm : !this.state.displayAdminForm});
        }
    }

    componentDidMount () {
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentWillUnmount () {
        document.removeEventListener("keydown", this.handleKeyDown, false);
    }

    render() {
        return (
            <div className='app'>
                <Display />
                <Keyboard />
                {this.state.displayAdminForm ? <ConnectedAdminForm /> : null}
            </div>
        );
    }
}

export default App;