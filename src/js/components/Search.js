import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

class Search extends React.Component {

    constructor (props) {
        super(props);
        this.state = { inputText: '' };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({ inputText: event.target.value });
    }

    handleSubmit (event) {
        if (typeof(this.props.onFilterHistory) === 'function') {
            this.props.onFilterHistory(this.state.inputText);
        }
        event.preventDefault();
    }

    render () {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            placeholder="Search result"
                            value={this.props.inputText} 
                            onChange={this.handleChange} 
                        />
                    </label>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterHistory: f => dispatch(setFilter(f))
    };
};

export default connect(null, mapDispatchToProps)(Search);