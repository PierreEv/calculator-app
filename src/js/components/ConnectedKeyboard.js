import { connect } from 'react-redux'
import { addText, clearText, computeText } from '../redux/actions'
import Keyboard from './Keyboard'

const mapDispatchToProps = (dispatch, props) => {
    return {
        onTextClick: i => dispatch(addText(i)),
        onClearClick: () => dispatch(clearText()),
        onComputeClick: () => dispatch(computeText()),
    }
};

const ConnectedKeyboard = connect(null, mapDispatchToProps)(Keyboard);

export default ConnectedKeyboard;