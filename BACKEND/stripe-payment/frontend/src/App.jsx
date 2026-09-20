import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm.jsx';

// Initialize Stripe with your publishable key (safe for frontend)
const stripePromise = loadStripe('pk_test_51OEU4xIlkUVaCxOFpSrdQOWLlhhGJ9VH9zXZYDK6yXJpiEv1OvHGHi8sRUYYWTBeo8qVnOrBgI8tdfepgJYYpW5X00MUyDgcDS');

export default function App() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent on your backend when page loads
    fetch('http://localhost:4000/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_price: 3000, product_name: "Mackbook", product_image: "https://static.store-cdn.com/files/87161/Images/czone-20260315073124-2-87161-0-150326073135600.webp",
        product_id: 230
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClientSecret(data.client_secret)
      });
  }, []);

  const options = { clientSecret };

  return (
    <div className="App">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
