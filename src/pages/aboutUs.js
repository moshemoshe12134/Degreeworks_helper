import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function AboutUs() {
  return (
    <div>
      <Link to="/main" className="btn-back" >back</Link>
      <div class="main-square">
          <h1>About Us</h1>
          <p>Quick introduction.</p>
          <h2>Our Story</h2>
          <p>Maybe something about why we're making this website.</p>
          <h2>Our Team</h2>
          <p>All members and something about us.</p>
          <h2>Contact Information</h2>
          <p>If you have any questions or would like to get in touch, you can contact us at <a href="mailto:abdultasin16@email.com">abdultasin16@email.com</a>.</p>
      </div>
    </div>
    
  )
}

export default AboutUs