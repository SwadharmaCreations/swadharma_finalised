import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  useEffect(() => {
    const nb = document.getElementById('navbar')
    const onScroll = () => {
      if (window.scrollY > 50) nb?.classList.add('scrolled')
      else nb?.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <style>{`
        :root{--section-bg:#f8f9fa;--border-color:#e0e0e0;--dark-blue:#0d1280;--light-yellow:#fff9c4}
        .hero{height:70vh;display:flex;flex-direction:column;justify-content:center;padding:0 5%;position:relative;overflow:hidden;background:linear-gradient(135deg,#f5f7fa 0%,#e4e7f1 100%);margin-top:80px}
        .hero-content{text-align:center;position:relative;z-index:2}
        .hero-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:4rem;line-height:1.1;margin:0;color:var(--blue)}
        .hero-subtitle{font-weight:300;font-style:italic;font-size:1.5rem;margin-top:1.5rem;max-width:600px;margin-inline:auto;color:#333}
        section{padding:100px 0}
        .section-header{text-align:center;margin-bottom:70px;padding:0 15px}
        .section-header h2{font-size:2.8rem;color:var(--blue);margin-bottom:15px;position:relative;display:inline-block;font-weight:800;letter-spacing:-.5px}
        .section-header h2::after{content:'';position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);width:80px;height:5px;background-color:var(--yellow)}
        .section-header p{color:#555;max-width:700px;margin:35px auto 0;font-size:1.1rem}
        .story-content{display:flex;align-items:center;gap:60px}
        .story-text{flex:1}
        .story-text h3{font-size:2rem;margin-bottom:25px;color:var(--blue)}
        .story-text p{margin-bottom:25px;color:#555;font-size:1.1rem}
        .story-img{flex:1;border-radius:4px;overflow:hidden;position:relative;box-shadow:0 15px 30px rgba(0,0,0,.1);aspect-ratio:4/3}
        .story-img img{width:100%;height:100%;display:block;object-fit:cover;transition:all .5s ease}
        .story-img:hover img{transform:scale(1.03)}
        .btn{display:inline-block;padding:14px 36px;background-color:var(--yellow);color:var(--black);border-radius:0;text-decoration:none;font-weight:700;transition:all .4s cubic-bezier(.16,1,.3,1);border:2px solid var(--yellow);letter-spacing:1px;font-size:16px;text-transform:uppercase;position:relative;overflow:hidden;z-index:2}
        .btn:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--blue);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1);z-index:-1}
        .btn:hover{color:var(--white);transform:translateY(-3px);box-shadow:0 12px 25px rgba(253,235,16,.25)}
        .btn:hover:before{transform:translateX(0)}
        .values{background-color:var(--section-bg)}
        .values-content{display:flex;gap:30px}
        .value-card{flex:1;background-color:var(--blue);border:1px solid var(--border-color);padding:40px 30px;text-align:center;transition:all .4s ease;box-shadow:0 5px 15px rgba(0,0,0,.05)}
        .value-card:hover{transform:translateY(-10px);box-shadow:0 15px 30px rgba(0,0,0,.1);border-top:3px solid var(--yellow)}
        .value-card i{font-size:2.5rem;color:var(--yellow);margin-bottom:25px}
        .value-card h3{font-size:1.6rem;margin-bottom:15px;color:var(--white)}
        .value-card p{color:#ffffff;font-size:1.05rem}
        .team-members{display:flex;flex-wrap:wrap;gap:30px;justify-content:center}
        .team-member{background-color:var(--white);border:1px solid var(--border-color);border-radius:4px;overflow:hidden;width:270px;transition:all .4s ease;box-shadow:0 5px 15px rgba(0,0,0,.05)}
        .team-member:hover{transform:translateY(-10px);box-shadow:0 15px 30px rgba(0,0,0,.1);border-color:var(--blue)}
        .member-img{height:300px;overflow:hidden}
        .member-img img{width:100%;height:100%;object-fit:cover;transition:all .5s ease}
        .team-member:hover .member-img img{transform:scale(1.1)}
        .member-info{padding:25px;text-align:center;background-color:var(--white)}
        .member-info h3{font-size:1.4rem;margin-bottom:5px;color:var(--blue)}
        .member-info p{color:var(--blue);font-weight:500;margin-bottom:15px;font-size:.9rem;letter-spacing:1px}
        .social-links{display:flex;justify-content:center;gap:15px}
        .social-links a{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background-color:var(--light-yellow);color:var(--blue);transition:all .3s ease}
        .social-links a:hover{background-color:var(--blue);color:var(--white);transform:translateY(-3px)}
        .process{background-color:var(--section-bg)}
        .process-steps{display:flex;gap:30px}
        .process-step{flex:1;text-align:center;padding:40px 25px;position:relative;background-color:var(--white);border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,.05);transition:all .3s ease}
        .process-step:hover{transform:translateY(-10px);box-shadow:0 15px 30px rgba(0,0,0,.1)}
        .step-number{width:60px;height:60px;background-color:var(--blue);border:2px solid var(--yellow);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:700;color:var(--yellow);margin:0 auto 25px;position:relative;z-index:2}
        .cta{padding:120px 0;text-align:center;background-color:var(--blue);color:var(--white);position:relative;overflow:hidden}
        .cta-content{max-width:700px;margin:0 auto;position:relative;z-index:1}
        .cta h2{font-size:3.2rem;margin-bottom:20px;font-weight:800}
        .cta p{font-size:1.2rem;margin-bottom:40px;opacity:.9}
        .cta-btn{display:inline-block;padding:14px 36px;background-color:var(--yellow);color:var(--black);border-radius:0;text-decoration:none;font-weight:700;transition:all .4s cubic-bezier(.16,1,.3,1);border:2px solid var(--yellow);letter-spacing:1px;font-size:16px;text-transform:uppercase;position:relative;overflow:hidden;z-index:2}
        .cta-btn:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--blue);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1);z-index:-1}
        .cta-btn:hover{color:var(--white);transform:translateY(-3px);box-shadow:0 12px 25px rgba(253,235,16,.25)}
        .cta-btn:hover:before{transform:translateX(0)}
        @media(max-width:992px){.story-content{flex-direction:column}.hero-title{font-size:3rem}.section-header h2{font-size:2.2rem}.values-content{flex-direction:column;gap:25px}.process-steps{flex-direction:column;gap:25px}}
        @media(max-width:576px){.hero{height:50vh}.hero-title{font-size:2rem}.section-header h2{font-size:1.8rem}.team-member{width:100%;max-width:350px}.story-img{aspect-ratio:16/9}}
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title"><span>About Us</span></h1>
          <p className="hero-subtitle">Discover the story behind Swadharma Creations</p>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="container" style={{maxWidth:1200, margin:'0 auto', padding:'0 20px'}}>
          <div className="section-header">
            <h2>Our Story</h2>
            <p>Founded on the principles of authentic expression and creative excellence</p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <h3>From Vision to Impact</h3>
              <p>Swadharma was born from a simple idea: that every brand has a unique story worth telling. Founded in 2018, we set out to create a studio where artistry meets strategy to build meaningful brand experiences.</p>
              <p>Our journey began with just two passionate creatives in a small studio. Today, we've grown into a diverse team of designers, photographers, and strategists who share a common vision: to elevate brands through authentic storytelling and visual excellence.</p>
              <p>What sets us apart is our commitment to understanding the essence of each brand we work with. We don't just create beautiful visuals - we craft narratives that resonate, connect, and inspire action.</p>
              <Link to="/workpage" className="btn">View Our Work</Link>
            </div>
            <div className="story-img">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Our Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="container" style={{maxWidth:1200, margin:'0 auto', padding:'0 20px'}}>
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide our work and relationships</p>
          </div>
          <div className="values-content">
            <div className="value-card"><i className="fas fa-lightbulb"></i><h3>Creative Integrity</h3><p>We believe in creating work that's not just beautiful, but meaningful and authentic to your brand's essence.</p></div>
            <div className="value-card"><i className="fas fa-users"></i><h3>Collaborative Spirit</h3><p>Your vision is our starting point. We work with you, not just for you, to bring your story to life.</p></div>
            <div className="value-card"><i className="fas fa-star"></i><h3>Excellence in Craft</h3><p>Every pixel, every frame, every word is crafted with meticulous attention to detail.</p></div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <div className="container" style={{maxWidth:1200, margin:'0 auto', padding:'0 20px'}}>
          <div className="section-header">
            <h2>Meet The Team</h2>
            <p>The creative minds behind Swadharma</p>
          </div>
          <div className="team-members">
            {[
              {img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80', name:'Aisha Sharma', role:'Founder & Creative Director', links:['linkedin-in','instagram','twitter']},
              {img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', name:'Raj Patel', role:'Lead Photographer', links:['instagram','behance','twitter']},
              {img:'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80', name:'Maya Verma', role:'Senior Designer', links:['dribbble','behance','instagram']},
              {img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', name:'Arjun Singh', role:'Video Director', links:['vimeo-v','instagram','youtube']}
            ].map((m,i)=>(
              <div className="team-member" key={i}>
                <div className="member-img"><img src={m.img} alt={m.name} /></div>
                <div className="member-info">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                  <div className="social-links">
                    {m.links.map((l,idx)=><a href="#" key={idx}><i className={`fab fa-${l}`}></i></a>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="container" style={{maxWidth:1200, margin:'0 auto', padding:'0 20px'}}>
          <div className="section-header">
            <h2>Our Creative Process</h2>
            <p>How we transform your vision into impactful creative solutions</p>
          </div>
          <div className="process-steps">
            {[
              {n:1,t:'Discover',d:'We begin by understanding your brand, goals, and audience through in-depth research and discovery sessions.'},
              {n:2,t:'Design',d:'Our creative team develops concepts and visual solutions that align with your strategic objectives.'},
              {n:3,t:'Develop',d:'We refine and execute the chosen direction with precision and attention to every detail.'},
              {n:4,t:'Deliver',d:'Final assets are delivered with guidelines to ensure consistent implementation and maximum impact.'}
            ].map((s,i)=>(
              <div className="process-step" key={i}>
                <div className="step-number">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container" style={{maxWidth:1200, margin:'0 auto', padding:'0 20px'}}>
          <div className="cta-content">
            <h2>Ready to Elevate Your Brand?</h2>
            <p>Let's collaborate to create something extraordinary together</p>
            <Link to="/contactus" className="cta-btn">Start Your Project</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
