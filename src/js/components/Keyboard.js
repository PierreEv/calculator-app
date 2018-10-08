import React from 'react';
import Button from './Button';

class Keyboard extends React.Component {
    renderButton(i, onClick) {
      return <Button
                value={i}
                onClick={() => onClick(i)}
                />;
    }

    renderTextButton(i) {
      return this.renderButton(i, this.props.onTextClick);
    }

    renderClearButton(i) {
      return this.renderButton(i, this.props.onClearClick);
    }

    renderComputeButton(i) {
      return this.renderButton(i, this.props.onComputeClick);
    }
  
    render() { 
      return (
        <div>
          <div className="board-row">
            {this.renderTextButton(7)}
            {this.renderTextButton(8)}
            {this.renderTextButton(9)}
            {this.renderTextButton('+')}
          </div>
          <div className="board-row">
            {this.renderTextButton(4)}
            {this.renderTextButton(5)}
            {this.renderTextButton(6)}
            {this.renderTextButton('-')}
          </div>
          <div className="board-row">
            {this.renderTextButton(1)}
            {this.renderTextButton(2)}
            {this.renderTextButton(3)}
            {this.renderTextButton('*')}
          </div>
          <div className="board-row">
            {this.renderTextButton(0)}
            {this.renderTextButton('.')}
            {this.renderComputeButton('=')}
            {this.renderTextButton('/')}
          </div>
          <div className="board-row">
            {this.renderClearButton('C')}
          </div>
        </div>
      );
    }
}

export default Keyboard;