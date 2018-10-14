import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

    constructor(props){
        super(props);
        this.buildItem = this.buildItem.bind(this);
    }

    buildItem (state, i) {
        const searchPos = state.value.toString().search(this.props.filter);
        return searchPos === -1 ? null : (<li key={i}>
            {state.text + ' = ' + state.value}
        </li>);
    }

    render() {
        const previousOp = this.props.history.map(this.buildItem);
        return (
            <div className="List">
                <ol>{previousOp}</ol>
            </div>
        );
    }

};

const mapStateToProps = (state, props) => {
    return {
        history: state.history,
        filter: state.filter
    };
};

const ConnectedList = connect(mapStateToProps)(List);

export default ConnectedList;