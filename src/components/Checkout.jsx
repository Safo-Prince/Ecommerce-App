import React from "react";
import { useSelector } from "react-redux";
import "../css/Checkout.css";

const Checkout = () => {
  const products = useSelector((state) => state.selctedProducts);

  return (
    <main className="checkout">
      <form>
        <header>
          <h2 className="checkout--header">Biiling address</h2>
        </header>
        <div className=" form--group form--name">
          <div lassName="form---groupLastname">
            <label> First Name</label>
            <input />
          </div>
          <div className="form---groupLastname">
            <label> Last Name</label>
            <input />
          </div>
        </div>
        <div className="form--group form--username">
          <label> Username</label>
          <br />
          <input />
          <br />
        </div>
        <div className="form--group  form--email">
          <label>
            Email <span className="optional"> (optional)</span>
            <br />
          </label>

          <input placeholder="you@example.com" />
        </div>
        <div className="form--group  form--address">
          <label> Address</label>
          <br />
          <input placeholder="1234 main st" />
        </div>
        <div className="form--group form--address">
          <label>
            address 2 <span className="optional"> (optional)</span>
          </label>
          <br />
          <input placeholder="apartment or suite" />
        </div>
        <div className="form--group form--options">
          <div>
            <label> Country</label>
            <select className="form--select">
              <option> Choose</option>
              <option> United State</option>
            </select>
          </div>
          <div>
            <label> State</label>
            <select className="form--select">
              <option> Choose</option>
              <option> California</option>
            </select>
          </div>
          <div className="form--zip">
            <label> Zip</label>
            <input />
          </div>
        </div>
        <div className="form--group form--shipppingAddress">
          <div className="shipping--infomation">
            <input type="checkbox" placeholder="apartment or suite" />
            <label>Shipping address is the same as my billing address</label>
          </div>
          <div className="shipping--infomation">
            <input type="checkbox" placeholder="apartment or suite" />
            <label>Save this information for next time</label>
          </div>
        </div>

        <div className="form--group form--payment">
          <h2> Payment</h2>
          <div className="cardName">
            <input type="radio" placeholder="apartment or suite" />
            <label>Credit Card</label>
          </div>

          <div className="cardName">
            <input type="radio" placeholder="apartment or suite" />
            <label>Debit Card</label>
          </div>
          <div className="cardName">
            <input type="radio" placeholder="apartment or suite" />
            <label>Paypal</label>
          </div>
        </div>
        <div className="form--group form--card">
          <div className="card--detail">
            <label>Name on Card</label>
            <input />
            <small className="optional"> Full name as displayed on card</small>
          </div>
          <div className="card--detail">
            <label>Credit Card number </label>
            <input />
          </div>
        </div>
        <div className="form--group form--dates">
          <div className="form--date">
            <label>Expiration</label>
            <input />
          </div>
          <div className="form--date">
            <label>CVV</label>
            <input />
          </div>
        </div>
        <button className="checkout--button">Continue To checkout</button>
      </form>
      <article className="cartItem">
        <header className="yourCartTitle">
          <h2> Your cart</h2>
          <figure className="numberOfItems">
            <h3> {products.length}</h3>
          </figure>
        </header>
        {products.map((item) => (
          <table>
            <thead>
              <tr className="tableData">
                <td>{item.name}</td>
                <td> ${item.price}</td>
              </tr>
            </thead>
          </table>
        ))}
        {/* {products.map((item) => (
          <figure className="nameAndPrices">
            <div>
              <h4>{item.name}</h4>
            </div>
            <div>
              <h4 className="price">${item.price}</h4>
            </div>
          </figure>
        ))} */}
        <figure className="nameAndTotalPrices">
          <div>
            <h4>Total (USD)</h4>
          </div>
          <div className="totalPrice">
            <h4>$549</h4>
          </div>
        </figure>
        <div className="promoContainer">
          <input placeholder="Promo Code" />
          <button> Reedem</button>
        </div>
      </article>
    </main>
  );
};

export default Checkout;
