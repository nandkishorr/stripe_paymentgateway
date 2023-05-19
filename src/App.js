import React, { useState, useEffect } from "react";
import "./App.css";
const Main =()=>(
  <div className="main">
    <div className="header">
      <h1>The Sparks Foundation</h1>
      <h4 className="sub">... inspiring, innovating, integrating</h4>
      <br />
      <h2>All About GRIP</h2>
      <h4>The Graduate Rotational Internship Program is a unique offer for students and recent graduates to experience and join The Sparks Foundation. In addition to skills-specific tasks, we encourage interns to build a credible professional profile.</h4>
      <ul>
        <li>Verified Completion Certificate</li>
        <li>Opportunity to join TSF</li>
        <li>Networking Opportunity</li>
        <li>Recommendation Letter</li>
        <li>Workshops / guidance</li>
        <li>Special Badges</li>
      </ul>
    </div>
  </div>
)


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"
        alt="ThesparksFoundation"
      />
      <div className="description">
      <h3>Donate us</h3>
      <h5>Your kindness may not go unnoticed</h5>
      </div>
    </div>
    <form action="/checkout" method="POST">
      <button type="submit">
        Donate
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Donation Accepted! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to donate around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <><Main/><Message message={message} /></>
  ) : (<><Main/>
    <ProductDisplay /></>
    
  );
}