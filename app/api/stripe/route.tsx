import { CartItem } from "@/interfaces";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();

    const { items, email } = await reqBody;

    const extractingItems = items.map((item: CartItem) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [item.poster],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `https://furniturestoreyrn.vercel.app/`,
      cancel_url: `https://furniturestoreyrn.vercel.app/cart`,
      metadata: {
        email,
      },
    });
    return NextResponse.json({
      message: "Connection is Active",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
};
