import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  useEffect(() => {
    const nb = document.getElementById('navbar')
    const onScroll = () => {
      if (window.scrollY > 50) nb?.classList.add('scrolled')
      else nb?.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints
    cards.forEach(card => {
      const inner = card.querySelector('.service-card-inner')
      if (!inner) return
      const enter = () => inner.style.transform = 'rotateY(180deg)'
      const leave = () => inner.style.transform = 'rotateY(0deg)'
      const click = () => inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'
      if (!isTouch) {
        card.addEventListener('mouseenter', enter)
        card.addEventListener('mouseleave', leave)
      } else {
        card.addEventListener('click', click)
      }
    })
  }, [])

  return (
    <main className="main-content">
      <style>{`
        .main-content{flex:1;width:100%}
        .hero{height:80vh;min-height:600px;display:flex;flex-direction:column;justify-content:center;padding:0 10%;position:relative;overflow:hidden;background:linear-gradient(135deg,#f5f7fa 0%,#e4e7f1 100%);text-align:center}
        .hero-content{position:relative;z-index:20}
        .hero-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2.5rem,8vw,4.5rem);line-height:1;margin:0;text-transform:uppercase;letter-spacing:-.03em;color:var(--blue);position:relative;overflow:hidden;text-align:center}
        .hero-title span{display:inline-block;transform:translateY(100%);opacity:0;animation:slideIn .9s forwards}
        @keyframes slideIn{to{transform:translateY(0);opacity:1}}
        .hero-subtitle{font-weight:300;font-style:italic;font-size:clamp(1.1rem,3vw,1.5rem);margin-top:1.5rem;max-width:700px;margin-left:auto;margin-right:auto;color:#555}
        .hero-highlight{background-color:var(--yellow);padding:0 .5rem}
        .floating-elements{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;pointer-events:none}
        .floating-element{position:absolute;opacity:.9;z-index:10;animation:float 6s ease-in-out infinite}
        .floating-element.circle{width:clamp(80px,25vw,200px);height:clamp(80px,25vw,200px);border-radius:50%;background-color:var(--yellow);top:20%;right:10%}
        .floating-element.square{width:clamp(60px,20vw,150px);height:clamp(60px,20vw,150px);background-color:var(--blue);bottom:15%;left:10%;animation-delay:1s}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-20px) rotate(5deg)}}
        .standard-section{padding:5rem 5%;position:relative;overflow:hidden}
        .section-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2rem,5vw,3.5rem);margin-bottom:1rem;text-align:center;color:var(--blue);position:relative}
        .section-title:after{content:'';position:absolute;bottom:-.8rem;left:50%;transform:translateX(-50%);width:80px;height:4px;background-color:var(--yellow)}
        .section-subtitle{font-weight:400;font-size:clamp(1rem,3vw,1.2rem);max-width:700px;margin:0 auto 3rem;text-align:center;color:#555}
        .card-container{display:grid;gap:2rem;max-width:1400px;height:30rem;margin:0 auto;grid-template-columns:repeat(3,1fr)}
        .service-card{width:100%;max-width:350px;height:auto;min-height:450px;perspective:1000px;position:relative;margin:0 auto}
        .service-card-inner{position:relative;width:100%;height:100%;text-align:center;transition:transform .8s cubic-bezier(.16,1,.3,1);transform-style:preserve-3d}
        .service-card-front,.service-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:16px;display:flex;flex-direction:column;justify-content:center;padding:2rem;box-shadow:0 15px 30px rgba(0,0,0,.08)}
        .service-card-front{background-color:var(--white);border:1px solid rgba(0,0,0,.05)}
        .service-card-back{background:linear-gradient(135deg,var(--blue) 0%,#0d125e 100%);transform:rotateY(180deg);color:var(--white)}
        .service-icon{font-size:clamp(2.5rem,6vw,3.5rem);margin-bottom:1.5rem;color:var(--blue)}
        .service-card-back .service-icon{color:var(--yellow)}
        .service-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(1.5rem,4vw,1.8rem);margin-bottom:1rem;color:var(--blue)}
        .service-card-back .service-title{color:var(--white)}
        .service-desc{font-weight:400;font-size:clamp(.9rem,2.5vw,1.1rem);color:#555;margin-bottom:1.5rem}
        .service-card-back .service-desc{color:rgba(255,255,255,.85)}
        .service-features{list-style:none;text-align:left;margin-top:1.5rem}
        .service-feature{margin-bottom:.8rem;position:relative;padding-left:1.8rem;font-size:.95rem}
        .service-feature:before{content:'✓';position:absolute;left:0;top:0;color:var(--blue);font-weight:bold}
        .service-card-back .service-feature:before{color:var(--yellow)}
        .process-section{padding:5rem 5%;background-color:var(--blue);color:var(--white);position:relative;overflow:hidden}
        .process-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2rem,5vw,3.5rem);margin-bottom:3rem;text-align:center;color:var(--yellow);position:relative;z-index:2}
        .process-container{display:flex;flex-wrap:wrap;justify-content:center;position:relative;z-index:2;max-width:1200px;margin:0 auto;gap:2rem}
        .process-step{flex:0 0 calc(25% - 2rem);text-align:center;padding:0 1.5rem;position:relative;margin-bottom:2rem;opacity:0;transform:translateY(30px);transition:all .6s ease-out}
        .process-step:not(:last-child):after{content:'';position:absolute;top:30px;right:-27px;width:30px;height:2px;background-color:var(--white);transform:rotate(90deg);z-index:1}
        .step-number{width:70px;height:70px;background-color:var(--white);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:700;color:var(--blue);margin:0 auto 25px;position:relative;z-index:2}
        .step-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:1.3rem;margin-bottom:15px;color:var(--white)}
        .step-desc{font-weight:300;font-size:1rem;color:rgba(255,255,255,.9)}
        .contact-section{padding:5rem 5%;background-color:var(--white);text-align:center;position:relative;overflow:hidden}
        .contact-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2rem,5vw,3.5rem);margin-bottom:1.5rem;color:var(--blue)}
        .contact-subtitle{font-weight:300;font-size:clamp(1.1rem,3vw,1.5rem);margin-bottom:3rem;max-width:700px;margin-left:auto;margin-right:auto;color:#555}
        .contact-btn{display:inline-block;background-color:var(--yellow);color:var(--black);font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(1rem,3vw,1.2rem);padding:1rem 2.5rem;text-decoration:none;border-radius:50px;transition:all .4s cubic-bezier(.16,1,.3,1);border:2px solid var(--yellow);position:relative;overflow:hidden;z-index:2}
        .contact-btn:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--blue);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1);z-index:-1}
        .contact-btn:hover{color:var(--white);transform:translateY(-5px);box-shadow:0 10px 20px rgba(253,235,16,.3)}
        .contact-btn:hover:before{transform:translateX(0)}
        @media(max-width:1200px){.card-container{grid-template-columns:repeat(2,1fr)}.process-step{flex:0 0 calc(50% - 2rem)}.process-step:not(:last-child):after{display:none}}
        @media(max-width:768px){.hero{padding:0 5%;height:70vh;min-height:500px}.card-container{grid-template-columns:1fr}.process-step{flex:0 0 100%}}
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-element circle"></div>
          <div className="floating-element square"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title"><span>Our Creative</span></h1>
          <h1 className="hero-title"><span>Services</span></h1>
          <p className="hero-subtitle">We blend <span className="hero-highlight">creative storytelling</span> with strategic design to build powerful brand experiences</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="standard-section" id="services">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">Comprehensive creative solutions tailored to elevate your brand</p>

        <div className="card-container">
          {[
            {
              icon:'📸', title:'Photography',
              desc:'Capturing moments that tell your brand\'s unique story with visual impact and authenticity.',
              features:['Brand Storytelling Sessions','Product & Lifestyle Photography','Commercial & Editorial Shoots'],
              backDesc:'We capture authentic moments that tell your brand\'s unique story with visual impact and authenticity.',
              backFeatures:['Professional lighting setup','Studio & location shoots','High-resolution image delivery','Post-production editing']
            },
            {
              icon:'🎬', title:'Video Editing',
              desc:'Crafting compelling narratives through seamless editing, motion design, and post-production.',
              features:['Commercial & Promotional Videos','Social Media Content Creation','Motion Graphics & Animation'],
              backDesc:'We transform raw footage into compelling stories with seamless editing and professional post-production.',
              backFeatures:['Color grading & correction','Motion graphics & animation','Sound design & mixing','Multi-platform optimization']
            },
            {
              icon:'🎨', title:'Graphic Design',
              desc:'Creating visually stunning designs that communicate your brand identity across all touchpoints.',
              features:['Brand Identity Systems','Marketing & Advertising Materials','Packaging & Print Design'],
              backDesc:'We craft compelling visual identities that communicate your brand essence across all platforms.',
              backFeatures:['Logo & identity systems','Print & digital collateral','Packaging & merchandise','Brand guidelines']
            }
          ].map((s, i)=>(
            <div className="service-card" key={i}>
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <ul className="service-features">
                    {s.features.map((f, idx)=><li className="service-feature" key={idx}>{f}</li>)}
                  </ul>
                </div>
                <div className="service-card-back">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.backDesc}</p>
                  <ul className="service-features">
                    {s.backFeatures.map((f, idx)=><li className="service-feature" key={idx}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section" id="process">
        <h2 className="process-title">Our Creative Process</h2>
        <div className="process-container">
          {[
            {n:1,title:'Discover',desc:'We begin by understanding your brand, goals, and audience through in-depth research.'},
            {n:2,title:'Design',desc:'Our creative team develops concepts and visual solutions aligned with your objectives.'},
            {n:3,title:'Develop',desc:'We refine and execute the chosen direction with precision and attention to detail.'},
            {n:4,title:'Deliver',desc:'Final assets are delivered with guidelines for consistent implementation.'}
          ].map((p,i)=>(
            <div className="process-step" key={i} style={{opacity:1, transform:'translateY(0)'}}>
              <div className="step-number">{p.n}</div>
              <h3 className="step-title">{p.title}</h3>
              <p className="step-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Ready to Elevate Your Brand?</h2>
        <p className="contact-subtitle">Let's collaborate to create something extraordinary together</p>
        <Link to="/contactus" className="contact-btn">Start Your Project</Link>
      </section>
    </main>
  )
}
