import React from 'react';
import Display from './ConnectedDisplay';
import Keyboard from './ConnectedKeyboard';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Display />
                <Keyboard />
            </div>
        );
    }
}

export default App;