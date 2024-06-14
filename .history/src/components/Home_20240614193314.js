// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <main>
    <section className="hero">
    <div className="tags">
        <div className="tag">Portraits</div>
        <div className="tag">Landscapes</div>
        <div className="tag">Weddings</div>
        <div className="tag">Events</div>
        <div className="tag">Travel</div>
      </div>
      
      <p>Capturing moments from today… Creating memories for a lifetime.</p>
    </section>
  </main>
);

export default Home;
