"use server";

import Razorpay from "razorpay";

export async function createOrder() {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const order = await razorpay.orders.create({
    amount: 10000, 
    currency: "INR",
    receipt: "receipt_" + Math.random().toString(36).substring(7),
  });

  return order.id;
}
