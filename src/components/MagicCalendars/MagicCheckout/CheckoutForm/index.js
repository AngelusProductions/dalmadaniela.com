import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import { paths } from "../../../../constants/paths";

import t from "./text.js";
import "./styles/index.scss";

const CheckoutForm = ({ isError }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isError || !stripe || !elements) return

    setIsProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}${paths.magicCalendars.success}`
      },
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage("")
    }

    setIsProcessing(false)
  }

  return (
    <form id="magicCheckoutForm" onSubmit={handleSubmit}>
      <PaymentElement />
      {message && <p className="error">{message}</p>}
      <button
        id="magicCheckoutSubmitButton"
        className={`magicButton ${isError ? "disabled" : "clickable"}`}
        type="submit"
      >
        {isError ? t.error : isProcessing 
          ? t.processing : t.cta}
      </button>
    </form>
  );
};

export default CheckoutForm;
