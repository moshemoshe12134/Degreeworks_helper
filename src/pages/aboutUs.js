import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function AboutUs() {
  return (
    <div>
      <Link to="/main" className="btn-back" >back</Link>
            <div className="main-square">
                <h1>How-To-Use</h1>
                <p>
                Finding courses at Brooklyn College can be difficult and time-consuming.

      The Brooklyn College Course Selector lets you quickly look up multiple class descriptions at once by entering course codes separated by commas, spaces, or returns. No more decoding strings of letters and numbers!          
                </p>
                <p>
                <ul><li>For example, enter the string: "CISC. 3140 or 3142 or 3160 or 3171 or 3220" </li> <li>Click Save to save your favorites</li> <li>Click X to remove from Saved Items</li> </ul> <h2>What's displayed:</h2> <ul> <li>Course title and full description</li> </ul>
                </p>
            </div>
          </div>
    
  )
}

export default AboutUs