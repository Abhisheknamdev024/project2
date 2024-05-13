import './Footer.css'
import user_icon from '../../assets/user_icon.svg';
import logo from '../../assets/logo1.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-topleft">
                <img className='logo' src={logo} alt="" />
            </div>
            <div className="footer-topright">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="subscribe">Subscribe</div>
            </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-botom-left">
                    © 2024 Abhishek . All rights reserved.
                </p>
                <div className="foote-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        
    </div>
  )
}

export default Footer