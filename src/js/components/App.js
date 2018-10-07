import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            value: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        const text = this.state.text,
                value = this.state.value;
        switch (i) {
            case '=':
                this.setState({
                    value: eval(text)
                });
                break;

            case 'C':
                this.setState({
                    text: '',
                    value: null
                });
                break;
        
            default:
                if (value !== null) {
                    this.setState({
                        text: i,
                        value: null
                    });
                } else {
                    this.setState({
                        text: '' + text + i
                    });
                }
                break;
        }
    }

    render() {
        return (
            <div className='app'>
                <Display text={this.state.text} value={this.state.value}/>
                <Keyboard onClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;