import * as TYPE from './types';

export const updateField = (key, input) => dispatch => {
    const action = {
        type: TYPE.UPDATE_FIELD,
        payload: { key: key, value: input }
    };
    dispatch(action);
};

export const updateUserField = (key, input) => dispatch => {
    const action = {
        type: TYPE.UPDATE_USER_FIELD,
        payload: { key: key, value: input }
    };
    dispatch(action);
};

export const submitLogin = () => dispatch => {
    const action = {
        type: TYPE.LOGIN
    };
    dispatch(action);
};

export const submitSignUp = () => dispatch => {
    const action = {
        type: TYPE.SIGNUP
    };
    dispatch(action);
};

export const viewPostDetail = (id) => dispatch => {
    const action = {
        type: TYPE.VIEW_POST_DETAIL,
        payload: { id: id }
    };
    dispatch(action);
};

export const addCart = (post) => dispatch => {
    const action = {
        type: TYPE.ADD_CART,
        payload: { post: post }
    };
    dispatch(action);
};

