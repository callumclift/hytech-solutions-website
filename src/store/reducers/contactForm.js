import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    submitted: false,
    submitComplete: false
};

const submitContactFormInit = ( state, action ) => {
    return updateObject( state, { submitted: false } );
};

const submitContactFormStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const submitContactFormSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        submitted: true,
    } );
};

const submitContactFormFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const formReset = (state, action) => {
    return updateObject(state, { submitComplet: false });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SUBMIT_CONTACT_FORM_INIT: return submitContactFormInit( state, action );
        case actionTypes.SUBMIT_CONTACT_FORM_START: return submitContactFormStart( state, action );
        case actionTypes.SUBMIT_CONTACT_FORM_SUCCESS: return submitContactFormSuccess( state, action )
        case actionTypes.SUBMIT_CONTACT_FORM_FAIL: return submitContactFormFail( state, action );
        case actionTypes.FORM_RESET: return formReset( state, action );
        default: return state;
    }
};

export default reducer;