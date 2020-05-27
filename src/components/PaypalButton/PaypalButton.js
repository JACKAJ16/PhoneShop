import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { clearCart } from '../../actions/cartActions';
 
const PaypalButton = ({ clearCart, total }) => {
  
  const history = useHistory();
  
  const onSuccess = (payment) => {
    console.log("The payment was succeeded!", payment);
    clearCart();
    history.push('/');
  }
 
  const onCancel = (data) => {
    console.log('The payment was cancelled!', data);
  }
 
  const onError = (err) => {
    console.log("Error!", err);
  }
 
  let env = 'sandbox'; 
  let currency = 'USD'; 
 
  const client = {
    sandbox:    'AVrj3qAtaqvyI6cnReK-Vc325f0uknAV2ATPcIsJtn4yIafwIoalEREQPPS1R2J0ZAjIsArCbXfmv-V8',
    production: 'YOUR-PRODUCTION-APP-ID'
  }

  return (
    <PaypalExpressBtn 
      env={env}
      client={client}
      currency={currency}
      total={total} 
      onError={onError} 
      onSuccess={onSuccess} 
      onCancel={onCancel} />
      );   
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () => { dispatch(clearCart()) }
    }
  }

export default connect(null, mapDispatchToProps)(PaypalButton)