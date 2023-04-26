import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebook, faLinkedin, faTwitter, faSlack} from "@fortawesome/free-brands-svg-icons"
 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Footer.css';

function Footer() {

  return (
    <footer className="footer-container">
        <div className="socials">
            <a href="https://en-gb.facebook.com/schoolofcode/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/school/school-of-code/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com/theSchoolOfCode"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://slack.com/intl/en-gb/"><FontAwesomeIcon icon={faSlack} /></a>
        </div>
        <div className="mail-icon">
            <a href="https://www.schoolofcode.co.uk/"><FontAwesomeIcon icon={faEnvelope}/></a>
        </div> 
    </footer>
  )

}

export default Footer;