import { useEffect, useState } from 'react';
import {
  loadStripe,
  Stripe,
  RedirectToCheckoutServerOptions,
} from '@stripe/stripe-js';

export function usePayment() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const loadStripeKey = async () => {
      const loadedStripe = await loadStripe(
        import.meta.env.VITE_STRAPI_PUBLIC_KEY
      );
      setStripe(loadedStripe);
    };

    loadStripeKey();
  }, []);

  const makePayment = async (data: []) => {
    if (!stripe) {
      console.error('Stripe is not initialized yet.');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_END_POINT
        }/stripe/create-checkout-session`,
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        }
      );

      const session =
        (await response.json()) as RedirectToCheckoutServerOptions;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return makePayment;
}
