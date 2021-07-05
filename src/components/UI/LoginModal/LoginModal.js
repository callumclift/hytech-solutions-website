import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../../store/actions/index';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Alert, AlertTitle } from '@material-ui/lab';
import { validateSignupData, validateLoginData, validateForgotPasswordData } from '../../Validators/AuthValidator';

const useStyles = makeStyles((theme) => ({
    dialog: {
      paddingRight: '60px',
      paddingLeft: '60px',
    },
    button: {
        backgroundColor: '#fc7e4d',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#fc8c60',
            color: '#FFF'
        }
      },
      cancelButton: {
        color: '#fc7e4d',
      },
      switchButton: {
        color: 'black',
        fontSize: 12,
        textTransform: 'none'
      },
      textField: {
        '& label.Mui-focused': {
            color: '#fc7e4d',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#fc7e4d',
          },
      },
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      textFieldDiv: {
          display: 'flex',
          justifyContent: 'space-between',
      },
      alert: {
        textAlign: 'left'
      }
  }));



const LoginModal = props => {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const resetForm = () => {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      props.setFormErrors([])
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = {};
        if(props.signUp === 2){
            formData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            };


            const { valid, errors } = validateSignupData(formData);

            if(!valid){
              let validationErrors = [];
              console.log(errors);
              for (const key in errors) {
                validationErrors.push(errors[key]);
                console.log(`${key}: ${errors[key]}`);
            }
              props.setFormErrors(validationErrors);
            } else {

              props.setFormErrors([]);

              props.onAuth(formData, props.signUp).then((val) => {

                if(val.success){
                  props.handleClose();
                  resetForm();
                } else {
  
                  let validationErrors = [];
  
                  
  
                  for (const key in val.errors) {
                    validationErrors.push(val.errors[key]);
                    console.log(`${key}: ${val.errors[key]}`);
                }
  
                props.setFormErrors(validationErrors);
  
  
                  
                }
  
  
          
                 
              });

            }   
        } else if(props.signUp === 1){
          formData = {
              email: email,
              password: password,
          };


          const { valid, errors } = validateLoginData(formData);

          if(!valid){
            let validationErrors = [];
            console.log(errors);
            for (const key in errors) {
              validationErrors.push(errors[key]);
              console.log(`${key}: ${errors[key]}`);
          }
            props.setFormErrors(validationErrors);
          } else {

            props.setFormErrors([]);

            props.onAuth(formData, props.signUp).then((val) => {

              if(val.success){
                props.handleClose();
                resetForm();
              } else {

                let validationErrors = [];

                

                for (const key in val.errors) {
                  validationErrors.push(val.errors[key]);
                  console.log(`${key}: ${val.errors[key]}`);
              }

              props.setFormErrors(validationErrors);


                
              }


        
               
            });

          }   
      } else if(props.signUp === 3){
        
        const { valid, errors } = validateForgotPasswordData({email: email});

        if(!valid){
          let validationErrors = [];
          console.log(errors);
          for (const key in errors) {
            validationErrors.push(errors[key]);
            console.log(`${key}: ${errors[key]}`);
        }
          props.setFormErrors(validationErrors);
        } else {

          props.setFormErrors([]);

          props.onForgotPassword(email).then((val) => {

            if(val.success){
              props.setSuccessDialog(true);
              resetForm();
            } else {

              let validationErrors = [];

              

              for (const key in val.errors) {
                validationErrors.push(val.errors[key]);
                console.log(`${key}: ${val.errors[key]}`);
            }

            props.setFormErrors(validationErrors);


              
            }


      
             
          });

        }   
    }
      };


    let alertDialog = <Alert className={alert} severity="error">
    <AlertTitle>Error</AlertTitle>
    {props.formErrors.map(txt => <p key={txt}>{txt}</p>)}
    </Alert>


    let successDialog = <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    Password reset link has been sent to your email
    </Alert>

    let dialogTitle;

    if(props.signUp === 2){
        dialogTitle = 'Create Account';
    } else if (props.signUp === 3){
        dialogTitle = 'Reset Password';
    } else {
        dialogTitle = 'Sign In';
    }

    let dialogContent;


    if(props.signUp === 2){
        dialogContent = <DialogContent className={classes.dialog} align="left">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid alignContent="center" container spacing={1} justify="space-evenly">
        <Grid item xs={6}>
        <TextField
        className={classes.textField}
        color="secondary"
        autoFocus
        margin="dense"
        id="firstName"
        label="First Name"
        fullWidth
        required
        value={firstName}
          onInput={ e=>setFirstName(e.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
        className={classes.textField}
        color="secondary"
        margin="dense"
        id="lastName"
        label="Last Name"
        fullWidth
        required
        value={lastName}
          onInput={ e=>setLastName(e.target.value)}
        />
        </Grid>
      </Grid>
        <TextField
        className={classes.textField}
        color="secondary"
        autoFocus
        margin="dense"
        id="email"
        label="Email"
        type="email"
        fullWidth
        required
        value={email}
          onInput={ e=>setEmail(e.target.value)}
        />
        <TextField
        className={classes.textField} 
        margin="dense"
        id="createPassword"
        label="Create Password"
        type="password"
        fullWidth
        required
        value={password}
          onInput={ e=>setPassword(e.target.value)}
        />
        <TextField
        className={classes.textField} 
        margin="dense"
        id="confirmPassword"
        label="Re-type Password"
        type="password"
        fullWidth
        required
        value={confirmPassword}
          onInput={ e=>setConfirmPassword(e.target.value)}
        />
        <br/>
        {props.formErrors.length > 0 ? alertDialog : <div></div>}
        {props.loading ? <div align="center"><LoadingSpinner /></div> : <Button className={classes.button} variant="contained" color="primary" fullWidth={true} type="submit">
          Create Account
          </Button>}
          </form>
          <div align="center">
          <Button className={classes.switchButton} onClick={() => props.handleChange(1)} color="primary">
              Already have an account? Sign in
          </Button>
          </div> 
      </DialogContent>;
    } else if (props.signUp === 3){

      dialogContent = <DialogContent className={classes.dialog} align="left">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        className={classes.textField}
          color="secondary"
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onInput={ e=>setEmail(e.target.value)}
          required
        />  
    <br/>
    {props.formErrors.length > 0 ? alertDialog : <div></div>}
    {props.successDialog ? successDialog : <div></div>}
        {props.loading ? <div align="center"><LoadingSpinner /></div> : <Button className={classes.button} variant="contained" color="primary" fullWidth={true} type="submit">
        Send Reset Link
          </Button>}
      </form>
      <div align="center">
      <Button className={classes.switchButton} onClick={() => props.handleChange(1)} color="primary">
          Back to sign in
      </Button>
      </div> 
  </DialogContent>;
    } else {

        dialogContent = <DialogContent className={classes.dialog} align="left">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        className={classes.textField}
          color="secondary"
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onInput={ e=>setEmail(e.target.value)}
          required
        />
        <TextField
        className={classes.textField} 
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onInput={ e=>setPassword(e.target.value)}
          required
        />   
    <br/>
    {props.formErrors.length > 0 ? alertDialog : <div></div>}
        {props.loading ? <div align="center"><LoadingSpinner /></div> : <Button className={classes.button} variant="contained" color="primary" fullWidth={true} type="submit">
          Sign In
          </Button>}
      </form>
      <div align="center">
      <Button className={classes.switchButton} onClick={() => props.handleChange(3)} color="primary">
          Forgot Password?
      </Button>
      <Button className={classes.switchButton} onClick={() => props.handleChange(2)} color="primary">
          Create Account
      </Button>
      </div> 
  </DialogContent>;

    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" maxWidth="xs">
        <DialogTitle id="form-dialog-title" align="center">{dialogTitle}</DialogTitle>
        {dialogContent}
        <DialogActions>
          <Button className={classes.cancelButton} onClick={props.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onAuth: (formData, signUp) => dispatch(actions.auth(formData, signUp)),
        onForgotPassword: (email) => dispatch(actions.forgotPassword(email)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginModal);