import React from 'react'
import './footer.css'

const Footer = () => {
  
  const year = new Date().getFullYear();

    return (
    <footer>
        <div className="footer_container">
            <div className="footer_details_one">
                <h3>Get to Know Us</h3>
                <p>About Us</p>
                <p>How we started</p>
                
            </div>

            <div className="footer_details_one">
                <h3>
                   Connect with us
                </h3>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
                
            </div>

            <div className="footer_details_one">
                <h3>
                   Privacy
                </h3>
                <p>Policies</p>
                <p>Agreements</p>
                <p>Security</p>
                
            </div>
            
            
                
            
        </div>
        <div className="lastdetails">
                <p>&nbsp;Terms and Conditions &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;       Privacy&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Notice &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;     Intersted_based Ads    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;    Created on {year}&nbsp;</p>
        </div>
    </footer>
  )
}

export default Footer
