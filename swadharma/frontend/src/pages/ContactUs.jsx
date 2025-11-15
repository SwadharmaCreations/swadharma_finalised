import React, { useEffect, useState, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_ID = 'xqawbklw';

export default function ContactUs() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [showAck, setShowAck] = useState(false);
  const formRef = useRef(null); // Ref to access the form element

  // Effect to show modal and reset form on success
  useEffect(() => {
    if (state.succeeded) {
      setShowAck(true); // Show your success modal
      if (formRef.current) {
        formRef.current.reset(); // Reset the form fields
      }
    }
  }, [state.succeeded]);

  // Navbar scroll effect
  useEffect(() => {
    const nb = document.getElementById('navbar')
    const onScroll = () => {
      if (window.scrollY > 50) nb?.classList.add('scrolled')
      else nb?.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero text transition effect
  useEffect(() => {
    const heroTitleSpan = document.querySelector('.hero-title span')
    const heroSubtitle = document.querySelector('.hero-subtitle')
    const start = setTimeout(() => {
      if (heroTitleSpan) {
        heroTitleSpan.style.transform = 'translateY(0)'
        heroTitleSpan.style.opacity = '1'
      }
      setTimeout(() => {
        if (heroSubtitle) {
          heroSubtitle.style.transform = 'translateY(0)'
          heroSubtitle.style.opacity = '1'
        }
      }, 300)
    }, 500)
    return () => clearTimeout(start)
  }, [])


  return (
    <main>
      <style>{`
        /* --- HERO UPDATED --- */
        .contact-hero {
          height: 80vh; 
          min-height: 600px; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 10%;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,#f5f7fa 0%,#e4e7f1 100%);
        }
        .hero-content{position:relative;z-index:20;max-width:800px;margin:0 auto;text-align:center}
        .hero-title {
          font-family: 'Commissioner', sans-serif;
          font-weight: 700;
          font-size: 3.5rem;
          line-height: 1.2;
          margin: 0 0 1.5rem 0;
          letter-spacing: -.03em;
          color: var(--blue);
          overflow: hidden; 
        }
        .hero-title span {
          display: inline-block;
          transform: translateY(100%);
          opacity: 0;
          transition: transform .6s ease, opacity .6s ease;
        }
        .hero-highlight{background-color:var(--yellow);padding:0 .5rem;display:inline-block}
        .hero-subtitle {
          font-weight: 400;
          font-size: 1.4rem;
          color: #444;
          margin: 0 auto;
          max-width: 600px;
          transform: translateY(10px);
          opacity: 0;
          transition: transform .6s ease, opacity .6s ease;
        }
        /* --- END HERO --- */

        /* --- FLOATING ELEMENTS --- */
        .floating-elements{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;pointer-events:none}
        .floating-element{position:absolute;opacity:.9;z-index:10;animation:float 6s ease-in-out infinite}
        .floating-element.circle{width:clamp(80px,25vw,200px);height:clamp(80px,25vw,200px);border-radius:50%;background-color:var(--yellow);top:20%;right:10%}
        .floating-element.square{width:clamp(60px,20vw,150px);height:clamp(60px,20vw,150px);background-color:var(--blue);bottom:15%;left:10%;animation-delay:1s}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-20px) rotate(5deg)}}
        /* --- END FLOATING ELEMENTS --- */
        
        .contact-section{padding:5rem 10%;background-color:#f8f9fa}
        .contact-container{display:flex;gap:4rem;max-width:1400px;margin:0 auto}
        .contact-form-container{flex:1;background-color:var(--white);padding:3rem;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.05);position:relative;z-index:2}
        .contact-info-container{flex:1;display:flex;flex-direction:column;gap:2.5rem}
        .contact-info-card{background:linear-gradient(135deg,var(--blue) 0%,#0d125e 100%);color:var(--white);padding:2.5rem;border-radius:16px;transition:all .4s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden;box-shadow:0 15px 30px rgba(22,29,161,.1)}
        .contact-info-card:hover{transform:translateY(-10px);box-shadow:0 20px 40px rgba(22,29,161,.15)}
        .contact-info-card:before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:var(--yellow);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1)}
        .contact-info-card:hover:before{transform:translateX(0)}
        .contact-info-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:1.6rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:1rem}
        .contact-info-title i{color:var(--yellow);font-size:1.6rem}
        .contact-info-content{font-weight:300;font-size:1.1rem;line-height:1.7;margin-bottom:1.2rem}
        .contact-info-details{display:flex;flex-direction:column;gap:1.2rem;margin-top:1.5rem}
        .contact-info-item{display:flex;align-items:flex-start;gap:1rem}
        .contact-info-item i{color:var(--yellow);font-size:1.2rem;min-width:25px;padding-top:4px}
        .contact-info-item a{color:#fff;text-decoration:none;transition:all .3s ease}
        .contact-info-item a:hover{color:var(--yellow)}
        .map-container{height:280px;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);background:#f0f1ff;display:flex;align-items:center;justify-content:center;position:relative}
        .map-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(22,29,161,.85) 0%,rgba(13,18,94,.85) 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;color:#fff;opacity:0;transition:all .4s ease}
        .map-container:hover .map-overlay{opacity:1}
        .map-overlay-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:1.6rem;margin-bottom:.8rem}
        .map-overlay-text{font-weight:300;font-size:1rem;max-width:350px;margin-bottom:1.5rem;line-height:1.6}
        .map-btn{display:inline-block;background-color:var(--yellow);color:var(--black);font-family:'Commissioner',sans-serif;font-weight:700;font-size:.95rem;padding:.8rem 2rem;text-decoration:none;border-radius:50px;transition:all .3s ease}
        .form-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:2.2rem;color:var(--blue);margin-bottom:.8rem}
        .form-subtitle{font-weight:300;font-size:1.1rem;color:#666;margin-bottom:2.5rem;line-height:1.6}
        .form-group{margin-bottom:1.5rem;position:relative}
        .form-label{display:block;font-weight:500;font-size:.95rem;color:#444;margin-bottom:.6rem}
        .form-input{width:100%;padding:1rem 1.2rem;border:1px solid #e0e0e0;border-radius:8px;font-size:1rem;transition:all .3s ease;background-color:#f9f9ff}
        .form-input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(22,29,161,.08)}
        textarea.form-input{min-height:140px;resize:vertical}
        .submit-btn{display:inline-block;background-color:var(--yellow);color:var(--black);font-family:'Commissioner',sans-serif;font-weight:700;font-size:1.1rem;padding:1.1rem 0;text-decoration:none;border-radius:50px;transition:all .4s cubic-bezier(.16,1,.3,1);border:none;cursor:pointer;position:relative;overflow:hidden;z-index:2;width:100%;margin-top:.5rem}
        .submit-btn:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--blue);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1);z-index:-1}
        .submit-btn:hover{color:#fff;transform:translateY(-3px);box-shadow:0 12px 25px rgba(253,235,16,.25)}
        .submit-btn:hover:before{transform:translateX(0)}
        .ack-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:${showAck ? 'block' : 'none'};animation:fadeIn .3s ease}
        .ack-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:2.5rem;border-radius:16px;box-shadow:0 20px 40px rgba(0,0,0,.2);z-index:1001;text-align:center;max-width:500px;width:90%;display:${showAck ? 'block' : 'none'};animation:fadeIn .5s ease}
        .ack-icon{font-size:4rem;color:var(--blue);margin-bottom:1.5rem}
        .ack-title{font-family:'Commissioner',sans-serif;font-weight:7Am-bottom:1rem}
        .ack-text{font-weight:400;font-size:1.1rem;color:#444;margin-bottom:2rem;line-height:1.6}
        .ack-btn{display:inline-block;background-color:var(--yellow);color:var(--black);font-family:'Commissioner',sans-serif;font-weight:700;font-size:1.1rem;padding:.8rem 2rem;text-decoration:none;border-radius:50px;transition:all .3s ease;border:none;cursor:pointer}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @media(max-width:992px){.contact-container{flex-direction:column}}
        
        /* Formspree validation error style */
        .formspree-error {
          color: #f44336; /* Red color for errors */
          font-size: 0.9rem;
          margin-top: -10px;
          margin-bottom: 10px;
        }
      `}</style>
  
      {/* HERO */}
      <section className="contact-hero">
        <div className="floating-elements">
          <div className="floating-element circle"></div>
          <div className="floating-element square"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Let's <span className="hero-highlight">Connect</span></span>
          </h1>
          <p className="hero-subtitle">We'd love to hear about your project and explore how we can bring your vision to life</p>
        </div>
      </section>

      {/* CONTACT FORM UPDATED */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-form-container">
            <h2 className="form-title">Send Us a Message</h2>
            <p className="form-subtitle">Have a project in mind? Fill out the form and we'll get back to you within 24 hours.</p>

            {/* 2. FORM IS UPDATED */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input className="form-input" id="name" name="name" type="text" placeholder="Enter your name" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-input" id="email" name="email" type="email" placeholder="Enter your email" required />
                {/* 3. FORMSPREE ERROR MESSAGE FOR EMAIL */}
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="formspree-error"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input className="form-input" id="subject" name="subject" type="text" placeholder="What is this regarding?" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea className="form-input" id="message" name="message" placeholder="Tell us about your project..." required />
                {/* 4. FORMSPREE ERROR MESSAGE FOR MESSAGE */}
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="formspree-error"
                />
              </div>

              {/* 5. GENERAL ERROR MESSAGE (e.g., if server is down) */}
              {state.errors && !state.succeeded && (
                <div className="formspree-error">
                  {state.errors.getFormErrors().map(error => error.message).join(', ')}
                </div>
              )}

              {/* 6. BUTTON IS UPDATED */}
              <button className="submit-btn" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* This whole info section is unchanged */}
          <div className="contact-info-container">
            <div className="contact-info-card">
              <h3 className="contact-info-title"><i className="fas fa-map-marker-alt"></i> Our Studio</h3>
              <p className="contact-info-content">We're located in the creative district, surrounded by inspiration and innovation.</p>
              <div className="contact-info-details">
                <div className="contact-info-item"><i className="fas fa-building"></i><span>123 Creative Avenue, Studio 5B</span></div>
                <div className="contact-info-item"><i className="fas fa-city"></i><span>Design District, Creative City 10001</span></div>
              </div>
            </div>
            <div className="contact-info-card">
              <h3 className="contact-info-title"><i className="fas fa-envelope"></i> Get In Touch</h3>
              <p className="contact-info-content">Prefer to reach out directly? Here's how you can contact our team.</p>
              <div className="contact-info-details">
                <div className="contact-info-item"><i className="fas fa-envelope"></i><span><a href="mailto:hello@swadharmacreations.com">hello@swadharmacreations.com</a></span></div>
                <div className="contact-info-item"><i className="fas fa-phone-alt"></i><span><a href="tel:+11234567890">+1 (123) 456-7890</a></span></div>
                <div className="contact-info-item"><i className="fas fa-clock"></i><span>Mon-Fri: 9am - 6pm</span></div>
              </div>
              <div className="social-links" style={{display:'flex',gap:'1.2rem',marginTop:'1.8rem'}}>
                {['instagram','linkedin-in','facebook'].map((n,i)=>(
                  <a key={i} className="social-link" href="#"><i className={`fab fa-${n}`}></i></a>
                ))}
              </div>
            </div>
            <div className="map-container">
              <i className="fas fa-map-marked-alt" style={{fontSize:'4rem', color:'var(--blue)'}}></i>
              <div className="map-overlay">
                <h3 className="map-overlay-title">Visit Our Studio</h3>
                <p className="map-overlay-text">We'd love to welcome you to our creative space. Schedule a visit today!</p>
                <a href="#" className="map-btn">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACK MODAL (This logic is now connected to Formspree) */}
      <div className="ack-overlay" onClick={()=>setShowAck(false)} />
      <div className="ack-modal">
        <i className="fas fa-check-circle ack-icon"></i>
        <h2 className="ack-title">Message Sent Successfully!</h2>
        <p className="ack-text">Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>
        <button className="ack-btn" onClick={()=>setShowAck(false)}>Got It</button>
      </div>
    </main>
  )
}