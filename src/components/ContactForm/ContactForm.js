import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contactForm: {
    margin: '20px auto',
    width: '80%',
    textAlign: 'center',
    boxShadow: '0 2px 3px #484848',
    border: '1px solid #fc7e4d',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderRadius: '5px'
},

'@media (min-width: 600px)': {
    contactForm: {
        width: '500px',
    }
},

button: {
  backgroundColor: '#fc7e4d',
  color: '#FFF',
  '&:hover': {
      backgroundColor: '#fc8c60',
      color: '#FFF'
  }
},

'button:disabled': {
  color: '#ccc',
  cursor: 'not-allowed'
}
}));

const ContactForm = props => {

  const classes = useStyles();
  const [contactForm, setContactForm] = useState({
    ...(props.organisation && {organisation: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Organisation Name'
      },
      value: '',
      validation: {
        required: false
      },
      valid: true,
      touched: false
    },}),
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-Mail'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    message: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Message'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState({submitted: false, success: false});

  const orderHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in contactForm) {
      formData[formElementIdentifier] = contactForm[formElementIdentifier].value;
    }
    
    props.onSubmitContactForm(formData).then((val) => {
      setFormIsSubmitted(val);
      if(val['submitted'] && val['success']){
        resetFormHandler();
        setFormIsValid(false);
      }  
    });
  };


  const resetFormHandler = () => {
    const updatedContactForm = updateObject(contactForm, {
      ...(props.organisation && {organisation: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Organisation Name'
        },
        value: '',
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },}),
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      message: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Message'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    });
    setContactForm(updatedContactForm);

  }

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(contactForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        contactForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedContactForm = updateObject(contactForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedContactForm) {
      formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
    }
    setContactForm(updatedContactForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in contactForm) {
    formElementsArray.push({
      id: key,
      config: contactForm[key]
    });
  }
  let submmitedMessage = (
    <div></div>
  );
  let button =(
    <Button variant="contained" className={classes.button} disabled={!formIsValid} type="submit">
        Submit
      </Button>
  );
  
  if (props.loading) {
    button = <LoadingSpinner />;
  }


  if(formIsSubmitted.submitted && formIsSubmitted.success){
   
    submmitedMessage = <div><br/>Form successfully submitted, thanks for getting in touch.</div>;
  } else if (formIsSubmitted.submitted && !formIsSubmitted.success){
    submmitedMessage = <div><br/>Something went wrong, please try again.</div>;
  }
  return (
    <div className={classes.contactForm}>
      <form 
      id="form1"
      onSubmit={orderHandler}>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => inputChangedHandler(event, formElement.id)}
        />
      ))}
      {button}
    </form>
    {submmitedMessage}
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
      loading: state.contactForm.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitContactForm: (formData) => dispatch(actions.submitContactForm(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
