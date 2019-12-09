import { connect } from 'react-redux';
import Login from '../screens/Login';

import { updateField } from '../actions';

const mapStateToProps = (state) => {
    return {
        booking: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateField: payload => {
            dispatch(updateField(payload))
        }
    };
};

// const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer;