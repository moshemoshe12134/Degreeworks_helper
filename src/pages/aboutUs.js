import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function AboutUs() {
  return (
    <div>
      <Link to="/main" className="btn-back" >back</Link>
            <div className="main-square">
                <h1>About</h1>
                <p>
                Finding courses at Brooklyn College can be difficult and time-consuming.

      The Brooklyn College Course Selector lets you quickly look up multiple class descriptions at once by entering course codes separated by commas, spaces, or returns. No more decoding strings of letters and numbers!          
                </p>
                <br />
                <h1>FAQ:</h1>
                <p>
                <h2>How to use:</h2> <ul> <li>Enter 2-4 letter/number codes from DegreeWorks</li> <li>Separate codes with commas, spaces, or returns</li> <li>Hit enter or Search to see full descriptions</li> <li>Click Save to save favorites</li> <li>Click again to remove from Saved Items</li> </ul> <h2>What's displayed:</h2> <ul> <li>Course title and full description</li> <li>Credits, prerequisites</li> </ul>
                </p>
            </div>
          </div>
    
  )
}

export default AboutUs