
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  const sig = event.headers['stripe-signature'];
  let eventStripe;

  try {
    eventStripe = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (eventStripe.type === 'checkout.session.completed') {
    const session = eventStripe.data.object;
    console.log('Pagamento confirmado: ', session);
  }

  return { statusCode: 200, body: 'Received.' };
};
