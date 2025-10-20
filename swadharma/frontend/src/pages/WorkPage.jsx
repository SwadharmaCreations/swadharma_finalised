import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function WorkPage() {
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
        .hero{height:60vh;display:flex;flex-direction:column;justify-content:center;padding:0 10%;position:relative;overflow:hidden;background:linear-gradient(135deg,#f5f7fa 0%,#e4e7f1 100%);text-align:center;margin-top:80px}
        .hero-title{font-family:'Commissioner',sans-serif;font-weight:700;font-size:clamp(2.5rem,8vw,4rem);line-height:1;margin:0;color:var(--blue)}
        .grid{padding:4rem 5%;display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
        .card{background:#fff;border:1px solid rgba(0,0,0,.05);border-radius:14px;overflow:hidden;box-shadow:0 10px 20px rgba(0,0,0,.06);transition:transform .3s, box-shadow .3s}
        .card:hover{transform:translateY(-6px);box-shadow:0 16px 28px rgba(0,0,0,.1)}
        .thumb{aspect-ratio:4/3;background:#eaeaea}
        .thumb img{width:100%;height:100%;object-fit:cover;display:block}
        .card-body{padding:1rem 1.1rem}
        .title{font-weight:700;color:#111;margin:.25rem 0}
        .meta{font-size:.9rem;color:#555}
      `}</style>

      <section className="hero">
        <h1 className="hero-title">Our Work</h1>
      </section>

      <section className="grid">
        {Array.from({length:9}).map((_,i)=>(
          <article className="card" key={i}>
            <div className="thumb">
              <img src={`https://images.unsplash.com/photo-15${20+i}000000-000000000000?auto=format&fit=crop&w=1200&q=70`} alt="Project" />
            </div>
            <div className="card-body">
              <h3 className="title">Project #{i+1}</h3>
              <div className="meta">Branding · Photography · Design</div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
