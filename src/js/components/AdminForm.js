import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import ConnectedList from './List';

class AdminForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {inputText: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({inputText: event.target.value});
    }

    handleSubmit(event) {
        if(typeof(this.props.onFilterHistory) === 'function') {
            this.props.onFilterHistory(this.state.inputText);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="AdminForm">
                <form onSubmit={this.handleSubmit}>
                    <label>Filter:
                        <input type="text" value={this.props.inputText} onChange={this.handleChange} />
                    </label>
                </form>
                <ConnectedList />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterHistory: f => dispatch(setFilter(f))
    }
};

const ConnectedAdminForm = connect(null, mapDispatchToProps)(AdminForm);

export default ConnectedAdminForm;