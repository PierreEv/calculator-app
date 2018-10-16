import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

    constructor (props) {
        super(props);
        this.buildItem = this.buildItem.bind(this);
    }

    buildItem (acc, state, i) {
        const searchPos = state.value.toString().indexOf(this.props.filter);
        if (searchPos !== -1) {
            acc.push((<li key={i}>
                {state.text + ' = ' + state.value}
            </li>));
        }

        return acc;
    }

    render () {
        const history = this.props.history;
        const items = history.reduce(this.buildItem, []);
        const text = items.length + ' match' + (items.length > 1 ? 's': '' ) + ' on ' + history.length + ' result'+ (history.length > 1 ? 's': '' );
        return (
            <div className="list">
                {text}
                <ol>{items}</ol>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        history: state.history,
        filter: state.filter
    };
};

export default connect(mapStateToProps)(List);