import { connect } from 'react-redux'
import Display from './Display'

const mapStateToProps = (state, props) => {
    return {
        text: state.text,
        value: state.value
    };
};

const ConnectedDisplay = connect(mapStateToProps)(Display);

export default ConnectedDisplay;