import { stripe } from '@/lib/stripe';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) return NextResponse.json({ status: 404 });

  const { type } = await request.json();

  let priceId;

  if (type == 'month') {
    priceId = process.env.STRIPE_MENSUEL_PRICE_ID; // Assurez-vous que cette variable est définie dans votre .env
  } else if (type == 'year') {
    priceId = process.env.STRIPE_ANNUAL_PRICE_ID; // Assurez-vous que cette variable est définie dans votre .env
  } else {
    return NextResponse.json({
      status: 400,
      message: "Type d'abonnement invalide",
    });
  }

  // const priceId = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;
  console.log('here is te priceId', priceId);
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?cancel=true`,
  });
  if (session) {
    return NextResponse.json({
      status: 200,
      session_url: session.url,
    });
  }
}
