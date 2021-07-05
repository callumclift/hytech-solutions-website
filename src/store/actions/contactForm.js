import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';
import axios from 'axios';

export const submitContactFormSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.SUBMIT_CONTACT_FORM_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const submitContactFormFail = ( error ) => {
    return {
        type: actionTypes.SUBMIT_CONTACT_FORM_FAIL,
        error: error
    };
}

export const formReset = () => {
    return {
        type: actionTypes.FORM_RESET
    };
};

export const submitContactFormStart = () => {
    return {
        type: actionTypes.SUBMIT_CONTACT_FORM_START
    };
};

// export const submitContactForm = ( orderData, token ) => {
//     return dispatch => {
//         dispatch( submitContactFormStart() );
//         axios.post( '/orders.json?auth=' + token, orderData )
//             .then( response => {
//                 dispatch( submitContactFormSuccess( response.data.name, orderData ) );
//             } )
//             .catch( error => {
//                 dispatch( submitContactFormFail( error ) );
//             } );
//     };
// };

// export const submitContactForm = ( formData) => {
//     console.log('in here');
//     console.log(formData);
//     return dispatch => {
//         dispatch( submitContactFormStart() );
//         axios.post( 'api/sendContactEmail', formData )
//             .then( response => {
//                 console.log('here is the response:', response);
//                 dispatch( submitContactFormSuccess( response.data.name, formData ) );
//             } )
//             .catch( error => {
//                 dispatch( submitContactFormFail( error ) );
//             } );
//     };
// };



export const submitContactForm = (formData) => {
    return dispatch => {
      return new Promise((resolve, reject) => {
        dispatch( submitContactFormStart() );
        axios.post( 'https://europe-west2-hytech-solutions-website.cloudfunctions.net/api/sendEmail', formData )
            .then( response => {
                dispatch( submitContactFormSuccess( response.data.name, formData ) );
                resolve({submitted: true, success: true});
            } )
            .catch( error => {
                dispatch( submitContactFormFail( error ) );
                resolve({submitted: true, success: false});
            } );
      });
    }
  }

// export const submitContactForm = ( formData) => {
//     console.log('in here');
//     console.log(formData);
//     return dispatch => {
//         dispatch( submitContactFormStart() );
//         axios.post( 'https://us-central1-hytech-solutions-website.cloudfunctions.net/api/sendEmail', formData )
//             .then( response => {
//                 console.log('here is the response:', response);
//                 dispatch( submitContactFormSuccess( response.data.name, formData ) );
//             } )
//             .catch( error => {
//                 dispatch( submitContactFormFail( error ) );
//             } );
//     };
// };

export const submitContactFormInit = () => {
    return {
        type: actionTypes.SUBMIT_CONTACT_FORM_INIT
    };
};

