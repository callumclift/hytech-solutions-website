import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const loadingStart = () => {
    return {
        type: actionTypes.LOADING_START
    };
};

export const loadingFinish = () => {
    return {
        type: actionTypes.LOADING_FINISH
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL,
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};


export const auth = (formData, signUp) => {
    return dispatch => {
      return new Promise((resolve, reject) => {

        dispatch(authStart());

        let functionUrl = signUp === 1 ? 'login' : 'signup';
        
            axios.post(`https://europe-west2-hytech-solutions-website.cloudfunctions.net/api/${functionUrl}`, formData)
            .then(response => {

                console.log('here is the response:');
                console.log(response.data);

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', response.data.expirationDate);
                localStorage.setItem('userId', response.data.userId);
                dispatch(authSuccess(response.data.token, response.data.userId));
                dispatch(checkAuthTimeout(response.data.expirationDate));
                resolve({submitted: true, success: true});
            })
            .catch(err => {
                console.log(err.response.data);
                let errors = err.response.data;
                dispatch(authFail());
                resolve({submitted: true, success: false, errors: errors});
            });
        
            
      });
    }
  }

  export const forgotPassword = (email) => {
      console.log(email);
    return dispatch => {
      return new Promise((resolve, reject) => {

        dispatch(loadingStart());
            axios.post('https://europe-west2-hytech-solutions-website.cloudfunctions.net/api/forgotPassword', {email: email})
            .then(response => {

                console.log('here is the response:');
                console.log(response.data);
                dispatch(loadingFinish());
                resolve({success: true});
            })
            .catch(err => {
                let errors = err.response.data;
                dispatch(loadingFinish());
                resolve({success: false, errors: errors});
            });    
      });
    }
  }


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};