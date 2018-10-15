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
        return (
            <div className="List">
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

const ConnectedList = connect(mapStateToProps)(List);

export default ConnectedList;