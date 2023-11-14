import React, { useState } from "react";
import { connect } from "react-redux";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import { paths } from "../../../../constants/paths";

import t from "./text.js";
import "./styles/index.scss";
import "../styles/index.scss";

const CheckoutForm = ({ isError, brandName, email }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isError || !stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}${paths.magicCalendars.success}`,
        payment_method_data: {
          billing_details: {
            name: brandName,
            email,
          },
        },
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("");
    }

    setIsProcessing(false);
  };

  return (
    <form id="magicCheckoutForm" onSubmit={handleSubmit}>
      <PaymentElement className="magicPaymentElement"/>
      {message && <p className="error">{message}</p>}
      <button
        id="magicCheckoutSubmitButton"
        className={`magicButton ${isError ? "disabled" : "clickable"}`}
        type="submit"
      >
        {isError ? t.error : isProcessing ? t.processing : t.cta}
      </button>
    </form>
  );
};

const mapState = (state) => {
  return {
    brandName: state.magicCalendars.brandName,
    email: state.magicCalendars.email,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(CheckoutForm);
