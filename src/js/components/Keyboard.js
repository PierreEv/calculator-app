import React from 'react';
import TextKeyBoard from './TextKeyboard';
import ActionKeyboard from './ActionKeyboard';

class Keyboard extends React.Component {
  
    render () { 
        return (
            <div className="keyboard">
                <ActionKeyboard />
                <TextKeyBoard />
            </div>
        );
    }
}

export default Keyboard;