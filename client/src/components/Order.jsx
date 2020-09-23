import React, { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
const stripePromise = loadStripe("pk_test_51HU4otHqeWVlhNqJ7NTbptD5erwy8p4EwqEQ1ZoZLreuw8Rt7xcG7TWAj88DXwhfL8vY7t9B5fiD96Hpow2yuuoS00nltDDR3v");

export default function Order({ restaurant }) {
  const [quantity1k, setQuantity1k] = useState(0);
  const [quantity3k, setQuantity3k] = useState(0);
  const [quantity5k, setQuantity5k] = useState(0);
  const [quantity10k, setQuantity10k] = useState(0);

  async function order() {    
    const stripe = await stripePromise;

    const response = await fetch("/api/pay/create-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

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
          <button 
            className="order-button"
            onClick={order}>ORDER</button>
      </div>
    </div>
  );
}
