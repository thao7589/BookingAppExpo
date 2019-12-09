import * as TYPE from './types';

export const updateField = (key, input) => dispatch => {
    const action = {
        type: TYPE.UPDATE_FIELD,
        payload: { key: key, value: input }
    };
    dispatch(action);
};

