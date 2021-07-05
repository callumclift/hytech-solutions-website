const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
}

const isEmail = (email) => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if(email.match(emailRegEx)) return true;
    else return false;
}

export const validateSignupData = (data) => {

    let errors = {};

    if(isEmpty(data.email)) {
        errors.email = 'Email must not be empty';
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address';
    }


    if(isEmpty(data.password)) errors.password = 'Password must not be empty';
    if(data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must match';
    if(data.password.length > 0 && data.password.length< 6) errors.password = 'Password must be at least 6 characters';
    if(isEmpty(data.firstName)) errors.firstName = 'First Name must not be empty';
    if(isEmpty(data.lastName)) errors.lastName = 'Last name must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }

}


export const validateLoginData = (data) => {
    let errors = {};

    if(isEmpty(data.email)) {
        errors.email = 'Email must not be empty';
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address';
    }

    if(isEmpty(data.password)) errors.password = 'Password must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }


}

export const validateForgotPasswordData = (data) => {
    let errors = {};

    if(isEmpty(data.email)) {
        errors.email = 'Email must not be empty';
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address';
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }


}