import { stripe } from './stripe-config';
import { Partner } from '@/types';

export async function createCustomer(partner: Partner) {
  return await stripe.customers.create({
    email: partner.email,
    name: partner.name,
    metadata: {
      partnerId: partner.id,
    },
  });
}

export async function createSubscription(customerId: string, priceId: string) {
  return await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent'],
  });
}

export async function cancelSubscription(subscriptionId: string) {
  return await stripe.subscriptions.cancel(subscriptionId);
}