import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebook, faLinkedin, faTwitter, faSlack} from "@fortawesome/free-brands-svg-icons"
 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Footer.css';

function Footer() {

  return (
    <footer className="footer-container">
        <div className="socials">
        <a href="https://en-gb.facebook.com/schoolofcode/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
         <a href="https://www.linkedin.com/school/school-of-code/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover" icon={faLinkedin} /></a>
            <a href="https://twitter.com/theSchoolOfCode" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover" icon={faTwitter} /></a>
            <a href="https://slack.com/intl/en-gb/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover" icon={faSlack} /></a>
        </div>
        <div className="mail-icon">
            <a href="https://www.schoolofcode.co.uk/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover" icon={faEnvelope}/></a>
        </div> 
    </footer>
  )

}

export default Footer;