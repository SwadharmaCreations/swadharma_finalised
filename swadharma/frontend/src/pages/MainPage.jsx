import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const onScroll = () => {
      if (window.scrollY > 50) navbar?.classList.add('scrolled')
      else navbar?.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const heroTitleSpans = document.querySelectorAll('.hero-title span')
    const heroSubtitle = document.querySelector('.hero-subtitle')
    const start = setTimeout(() => {
      heroTitleSpans.forEach((span, index) => {
        setTimeout(() => {
          span.style.transform = 'translateY(0)'
          span.style.opacity = '1'
        }, 300 * index)
      })
      setTimeout(() => {
        if (heroSubtitle) {
          heroSubtitle.style.transform = 'translateY(0)'
          heroSubtitle.style.opacity = '1'
        }
      }, 900)
    }, 500)
    return () => clearTimeout(start)
  }, [])

  // Touch devices: click to flip (no hover). Desktop: pure CSS hover (no JS).
  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0

    document.documentElement.classList.toggle('is-touch', !!isTouch)

    if (!isTouch) return // desktop uses CSS hover only

    const cards = Array.from(document.querySelectorAll('.dna-card'))
    const onClick = (e) => {
      e.currentTarget.classList.toggle('flipped')
    }
    cards.forEach((c) => c.addEventListener('click', onClick))
    return () => cards.forEach((c) => c.removeEventListener('click', onClick))
  }, [])

  return (
    <main>
      <style>{`
        .hero{height:100vh;display:flex;flex-direction:column;justify-content:center;padding:0 10%;position:relative;overflow:hidden;background:linear-gradient(135deg,#f5f7fa 0%,#e4e7f1 100%);text-align:center}
        .hero-content{position:relative;z-index:20}
        .hero-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2.5rem,8vw,6rem);line-height:1;margin:0;text-transform:uppercase;letter-spacing:-0.03em;color:var(--blue);position:relative;overflow:hidden;text-align:center}
        .hero-title span{display:inline-block;transform:translateY(100%);opacity:0;transition:transform .6s ease, opacity .6s ease}
        .hero-subtitle{font-family:'Roboto',sans-serif;font-weight:300;font-style:italic;font-size:clamp(1.1rem,3vw,1.5rem);margin-top:1.5rem;max-width:700px;margin-left:auto;margin-right:auto;color:#555;transform:translateY(10px);opacity:0;transition:transform .6s ease, opacity .6s ease}
        .hero-highlight{background-color:var(--yellow);padding:0 .5rem}
        .floating-elements{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;pointer-events:none}
        .floating-element{position:absolute;opacity:.9;z-index:10;animation:float 6s ease-in-out infinite}
        .floating-element.circle{width:clamp(80px,25vw,200px);height:clamp(80px,25vw,200px);border-radius:50%;background-color:var(--yellow);top:20%;right:10%}
        .floating-element.square{width:clamp(60px,20vw,150px);height:clamp(60px,20vw,150px);background-color:var(--blue);bottom:15%;left:10%;animation-delay:1s}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-20px) rotate(5deg)}}

        .dna-visualization{min-height:100vh;background-color:var(--white);position:relative;padding:5rem 0;overflow:hidden}
        .dna-header{text-align:center;margin-bottom:3rem;padding:0 5%}
        .dna-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2rem,5vw,3.5rem);color:var(--blue);margin-bottom:1.5rem;position:relative;display:inline-block}
        .dna-title:after{content:'';position:absolute;bottom:-.8rem;left:50%;transform:translateX(-50%);width:80px;height:4px;background-color:var(--yellow)}
        .dna-subtitle{font-family:'Roboto',sans-serif;font-weight:400;font-size:clamp(1rem,3vw,1.2rem);max-width:700px;margin:0 auto;color:#555}

        .dna-container{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;padding:0 5%;position:relative;z-index:2;max-width:1400px;margin:0 auto}
        .dna-element{perspective:1200px} /* a bit deeper perspective for smoother depth */

        .dna-card{
          width:100%;height:100%;min-height:380px;position:relative;
          transform-style:preserve-3d;
          transition:transform .7s cubic-bezier(.22,1,.36,1); /* gentle spring-like */
          cursor:pointer;
          will-change:transform; /* GPU hint */
        }
        /* Desktop hover: flip (no JS). Touch: click toggles .flipped */
        :not(.is-touch) .dna-element:hover .dna-card{ transform: rotateY(180deg) }

        .dna-card.flipped{ transform: rotateY(180deg) } /* touch toggle */

        .dna-card-front,.dna-card-back{
          position:absolute;width:100%;height:100%;backface-visibility:hidden;
          border-radius:16px;display:flex;flex-direction:column;justify-content:center;
          padding:2rem;box-shadow:0 10px 30px rgba(0,0,0,.08);
          transform: translateZ(0); /* avoid z-fighting/flicker */
        }
        .dna-card-front{background-color:var(--white);border:1px solid rgba(0,0,0,.05)}
        .dna-card-back{
          background:linear-gradient(135deg,var(--blue) 0%,#0d125e 100%);
          transform:rotateY(180deg) translateZ(0);
          color:var(--white)
        }

        /* Prevent hover thrash: faces don’t capture the pointer on desktop */
        :not(.is-touch) .dna-card-front,
        :not(.is-touch) .dna-card-back { pointer-events:none; }

        .dna-icon{font-size:clamp(2.5rem,6vw,3.5rem);margin-bottom:1rem;color:var(--blue)}
        .dna-card-back .dna-icon{color:var(--yellow)}
        .dna-element-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(1.5rem,4vw,1.8rem);margin-bottom:.8rem;color:var(--blue)}
        .dna-card-back .dna-element-title{color:var(--white)}
        .dna-element-desc{font-weight:400;font-size:clamp(.9rem,2.5vw,1.1rem);color:#555}
        .dna-card-back .dna-element-desc{color:rgba(255,255,255,.85)}

        .dna-strand-bg{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;z-index:1}
        .dna-strand{position:absolute;top:50%;left:50%;width:200%;height:500px;transform:translate(-50%,-50%) rotate(-10deg);opacity:.05}
        .helix{position:absolute;width:100%;height:100%;animation:rotate 60s linear infinite}
        .helix-path{stroke:var(--blue);stroke-width:2;fill:none}
        .helix:nth-child(2){transform:translateX(20px);animation-duration:55s}
        .helix:nth-child(3){transform:translateX(40px);animation-duration:65s}
        @keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}

        .values-section{padding:5rem 5%;background-color:var(--blue);color:var(--white);position:relative;overflow:hidden}
        .section-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2rem,5vw,3.5rem);margin-bottom:3rem;text-align:center;color:var(--yellow);position:relative;z-index:2}
        .values-container{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;position:relative;z-index:2;max-width:1300px;margin:0 auto}
        .value-card{background-color:rgba(255,255,255,.08);padding:1.5rem;border-radius:16px;transition:all .5s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}
        .value-card:hover{transform:translateY(-10px);background-color:rgba(255,255,255,.12);box-shadow:0 15px 30px rgba(0,0,0,.15)}
        .value-card:before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(90deg,var(--yellow),transparent);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1)}
        .value-card:hover:before{transform:translateX(0)}
        .value-icon{font-size:clamp(2rem,5vw,3rem);margin-bottom:1rem;color:var(--yellow)}
        .value-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(1.5rem,4vw,1.8rem);margin-bottom:.8rem}
        .value-desc{font-weight:300;font-size:clamp(.9rem,2.5vw,1.1rem);line-height:1.6;opacity:.9}

        .contact-section{padding:5rem 5%;background-color:var(--white);text-align:center;position:relative;overflow:hidden}
        .contact-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2rem,5vw,3.5rem);margin-bottom:1rem;color:var(--blue)}
        .contact-subtitle{font-weight:300;font-size:clamp(1.1rem,3vw,1.5rem);margin-bottom:2rem;max-width:700px;margin-left:auto;margin-right:auto;color:#555}
        .contact-btn{display:inline-block;background-color:var(--yellow);color:var(--black);font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(1rem,3vw,1.2rem);padding:1rem 2.5rem;text-decoration:none;border-radius:50px;transition:all .4s cubic-bezier(.16,1,.3,1);border:2px solid var(--yellow);position:relative;overflow:hidden;z-index:2}
        .contact-btn:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--blue);transform:translateX(-100%);transition:transform .6s cubic-bezier(.16,1,.3,1);z-index:-1}
        .contact-btn:hover{color:var(--white);transform:translateY(-5px);box-shadow:0 10px 20px rgba(253,235,16,.3)}
        .contact-btn:hover:before{transform:translateX(0)}

        @media(max-width:1200px){.dna-container{grid-template-columns:repeat(2,1fr);max-width:900px;gap:2rem}}
        @media(max-width:992px){.dna-container{grid-template-columns:1fr;max-width:500px}}
        @media(max-width:480px){.floating-element.circle{top:15%;right:5%}.floating-element.square{bottom:20%;left:5%}.dna-card{min-height:320px}}
      `}</style>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="floating-elements">
          <div className="floating-element circle"></div>
          <div className="floating-element square"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title"><span>Swadharma</span></h1>
          <h1 className="hero-title"><span>Creations</span></h1>
          <p className="hero-subtitle">Where <span className="hero-highlight">creative storytelling</span> meets strategic design excellence</p>
        </div>
      </section>

      {/* DNA VISUALIZATION */}
      <section className="dna-visualization" id="dna">
        <div className="dna-strand-bg">
          <div className="dna-strand">
            <div className="helix"><svg viewBox="0 0 400 400"><path className="helix-path" d="M200,50 Q250,100 200,150 Q150,200 200,250 Q250,300 200,350" /></svg></div>
            <div className="helix"><svg viewBox="0 0 400 400"><path className="helix-path" d="M200,50 Q150,100 200,150 Q250,200 200,250 Q150,300 200,350" /></svg></div>
            <div className="helix"><svg viewBox="0 0 400 400"><path className="helix-path" d="M200,50 Q250,100 200,150 Q150,200 200,250 Q250,300 200,350" /></svg></div>
          </div>
        </div>

        <div className="dna-header">
          <h2 className="dna-title">Our Creative DNA</h2>
          <p className="dna-subtitle">The fundamental elements that define our approach to creative work and brand development</p>
        </div>

        <div className="dna-container">
          {[
            {icon:'🎨', title:'Creative Storytelling', front:'Transforming ideas into visual narratives that captivate audiences and build lasting connections.', back:'We blend imagination and strategy to create stories that resonate emotionally and drive engagement.'},
            {icon:'✨', title:'Design Excellence', front:'Crafting clean, high-impact designs that communicate clearly across all mediums.', back:'Precision and attention to detail define our work—never rushed, never messy, always considered.'},
            {icon:'🚀', title:'Strategic Impact', front:'More than aesthetics—we design with purpose to elevate brands and deliver results.', back:'Every project is crafted with intention, backed by purpose and a strategic plan for success.'},
            {icon:'❤️', title:'Empathetic Approach', front:'Creating work that resonates on a human level through deep understanding.', back:'We listen deeply to understand audiences, creating connections that go beyond the surface.'}
          ].map((c,i)=>(
            <div className="dna-element" key={i}>
              <div className="dna-card">
                <div className="dna-card-front">
                  <div className="dna-icon">{c.icon}</div>
                  <h3 className="dna-element-title">{c.title}</h3>
                  <p className="dna-element-desc">{c.front}</p>
                </div>
                <div className="dna-card-back">
                  <div className="dna-icon">{c.icon}</div>
                  <h3 className="dna-element-title">{c.title}</h3>
                  <p className="dna-element-desc">{c.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section" id="values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-container">
          <div className="value-card"><div className="value-icon">💡</div><h3 className="value-title">Creative</h3><p className="value-desc">We think beyond the obvious. Every idea, frame, and design is driven by imagination and originality.</p></div>
        <div className="value-card"><div className="value-icon">🔒</div><h3 className="value-title">Confident</h3><p className="value-desc">We stand behind our work with conviction, delivering solutions that make a bold statement.</p></div>
          <div className="value-card"><div className="value-icon">🔍</div><h3 className="value-title">Refined</h3><p className="value-desc">Precision and attention to detail define our work—never rushed, never messy, always considered.</p></div>
          <div className="value-card"><div className="value-icon">🎯</div><h3 className="value-title">Strategic</h3><p className="value-desc">We create with intention. Every design and campaign is backed by purpose and a plan.</p></div>
          <div className="value-card"><div className="value-icon">🤝</div><h3 className="value-title">Empathetic</h3><p className="value-desc">We listen, we understand, and we tell stories that truly connect with people.</p></div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Let's Create Together</h2>
        <p className="contact-subtitle">Ready to elevate your brand with compelling storytelling and strategic design?</p>
        <Link to="/contactus" className="contact-btn">Get in Touch</Link>
      </section>
    </main>
  )
}
