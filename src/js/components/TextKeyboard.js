import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { addText } from '../redux/actions';

class TextKeyboard extends React.Component {

    renderButton (i, className) {
        return <Button
            className={className}
            value={i}
            onClick={() => this.props.onTextClick(i)}
        />;
    }

    render () {
        return (
            <div className="text-keyboard flex-row-container">
                <div className="numbers flex-column-container">
                    <div className="board-row">
                        {this.renderButton(7)}
                        {this.renderButton(8)}
                        {this.renderButton(9)}
                    </div>
                    <div className="board-row">
                        {this.renderButton(4)}
                        {this.renderButton(5)}
                        {this.renderButton(6)}
                    </div>
                    <div className="board-row">
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                        {this.renderButton(3)}
                    </div>
                    <div className="board-row">
                        {this.renderButton(0)}
                        {this.renderButton('.')}
                    </div>
                </div>
                <div className="ops flex-column-container">
                    {this.renderButton('*')}
                    {this.renderButton('/')}
                    {this.renderButton('+')}
                    {this.renderButton('-')}
                </div>
            </div>);
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onTextClick: i => dispatch(addText(i))
    };
};

export default connect(null, mapDispatchToProps)(TextKeyboard);