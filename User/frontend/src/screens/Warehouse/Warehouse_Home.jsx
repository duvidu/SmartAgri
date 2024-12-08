import React from 'react'
import Navigation from '../../components/Navigation'
import './Warehouse_Home.css'
import Gene from '../../images/Genetic/gene.svg'
import {Link} from 'react-router-dom' 

function Warehouse_Home() {
  return (
    <div>
      <Navigation />

      {/* Cover Image */}
      <img src={Gene} className="cover_image" />

      {/* Hero Section */}
      <section className="genetic-hero">
        <div className="hero-content">
          <h1>
            Empower Growth with <br />
            Seamless Fertilizer Requests
          </h1>
          <p>Elevate Your Yield with Precision Fertilizer Solutions</p>
          <Link to='http://localhost:4000/create_req'>
            <button className="cta-btn">send Ferilizer Request</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Warehouse_Home