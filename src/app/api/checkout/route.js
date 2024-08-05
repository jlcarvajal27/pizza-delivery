import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51PgIpZRvT2NLrlkwlCmgRUN6xacpvkK8WkbB80thYB1SREYKCIld7zjDDigsK1VtYxv5GcNMEJdDs8V4y0186aiV00P8y2buGV"
);

export async function POST(request) {
  const body = await request.json();

  try {
    const line_items = body.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      mode: "payment",
      line_items,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
