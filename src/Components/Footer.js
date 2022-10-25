import React from 'react'
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className='footer-subscription-heading'>
            Join the newsletter to receive our best
            news
        </p>
        <p className='footer-subscription-text'>
            You can unsubscribe at any time.
        </p>
        <div className='input-area'>
            <form>
                <input 
                   type='email'
                   name='email'
                   placeholder='Your Email'
                   className='footer-input' 
                />
                <Button buttonStyle='btn--outline'> Subscribe </Button>
            </form>
        </div>
      </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>  About us</h2>
                    <Link to='/sign-up'> How it works </Link>
                    <Link to='/'> Testimonials </Link>
                    <Link to='/'> Careers </Link>
                    <Link to='/'> Investors </Link>
                    <Link to='/'> Term of Services </Link>
                </div>
                <div className='footer-link-items'>
                    <h2>  Contact Us </h2>
                    <Link to='/'> Contact </Link>
                    <Link to='/'> Support </Link>
                    <Link to='/'> SponsorShips </Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>  Pictures </h2>
                    <Link to='/'> Submit pictures </Link>
                    <Link to='/'> Ambassadors </Link>
                    <Link to='/'> Agency </Link>
                    <Link to='/'> Influencer </Link>
                </div>
                <div className='footer-link-items'>
                    <h2>  Contact Us </h2>
                    <Link to='/sign-up'> How it works </Link>
                    <Link to='/'> Instagram </Link>
                    <Link to='/'> Facebook </Link>
                    <Link to='/'> Youtube </Link>
                    <Link to='/'> Twitter </Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        IZSOFTWARES <img src="IZ-logo.png" alt=""/>
                    </Link>
                </div>
                <small className='website-rights'> izsoftwares@gmail.com </small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'/>
                    </Link>
                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='instagram'
                    >
                        <i className='fab fa-instagram-f'/>
                    </Link>
                    <Link className='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='linkedin'
                    >
                        <i className='fab fa-linkedin-f'/>
                    </Link>
                    <Link className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='twitter'
                    >
                        <i className='fab fa-youtube-f'/>
                    </Link>
                    <Link className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='youtube'
                    >
                        <i className='fab fa-youtube-f'/>
                    </Link>
                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
