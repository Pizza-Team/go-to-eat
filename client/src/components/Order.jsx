import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function Order({ restaurant }) {
  const [quantity1k, setQuantity1k] = useState(0);
  const [quantity3k, setQuantity3k] = useState(0);
  const [quantity5k, setQuantity5k] = useState(0);
  const [quantity10k, setQuantity10k] = useState(0);
  const stripePromise = loadStripe(process.env.SECRET_KEY);

  // submit order
  async function order() {
    // create the session object
    const sessionObj = {
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "yen",
            product_data: {
              name: "¥1k Voucher",
            },
            unit_amount: 1000,
          },
          quantity: quantity1k,
        },
        {
          price_data: {
            currency: "yen",
            product_data: {
              name: "¥3k Voucher",
            },
            unit_amount: 3000,
          },
          quantity: quantity3k,
        },
        {
          price_data: {
            currency: "yen",
            product_data: {
              name: "¥5k Voucher",
            },
            unit_amount: 5000,
          },
          quantity: quantity5k,
        },
        {
          price_data: {
            currency: "yen",
            product_data: {
              name: "¥10k Voucher",
            },
            unit_amount: 10000,
          },
          quantity: quantity10k,
        },
      ],
      mode: "payment",
      success_url: `https://www.codechrysalis.io/`,
      cancel_url: `https://google.co.jp`,
    };

    // send request to create session
    const stripe = await stripePromise;
    const response = await axios.post("/create-session", sessionObj);
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  return (
    <div className="order-container">
      <table className="order-table">
        <tr>
          <th>Quantity</th>
          <th>Voucher Amount</th>
          <th>Discount</th>
          <th>Your Cost</th>
        </tr>
        <tr>
          <td>
            <select
              className="quantity"
              value={quantity1k}
              onChange={(e) => setQuantity1k(e.target.value)}
            >
              <option>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </td>
          <td className="voucher">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(1000)}
          </td>
          <td>25% OFF</td>
          <td className="discount-price">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(1000 - 1000 * 0.25)}
          </td>
        </tr>

        <tr>
          <td>
            <select
              className="quantity"
              value={quantity3k}
              onChange={(e) => setQuantity3k(e.target.value)}
            >
              <option>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </td>
          <td className="voucher">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(3000)}
          </td>
          <td>25% OFF</td>
          <td className="discount-price">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(3000 - 3000 * 0.25)}
          </td>
        </tr>

        <tr>
          <td>
            <select
              className="quantity"
              value={quantity5k}
              onChange={(e) => setQuantity5k(e.target.value)}
            >
              <option>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </td>
          <td className="voucher">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(5000)}
          </td>
          <td>25% OFF</td>
          <td className="discount-price">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(5000 - 5000 * 0.25)}
          </td>
        </tr>

        <tr>
          <td>
            <select
              className="quantity"
              value={quantity10k}
              onChange={(e) => setQuantity10k(e.target.value)}
            >
              <option>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </td>
          <td className="voucher">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(10000)}
          </td>
          <td>25% OFF</td>
          <td className="discount-price">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(10000 - 10000 * 0.25)}
          </td>
        </tr>
      </table>
      <div>
        <button className="order-button" onClick={order}>
          ORDER
        </button>
      </div>
    </div>
  );
}
