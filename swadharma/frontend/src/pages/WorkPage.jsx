import React, { useEffect } from 'react'

// ---
// EDIT YOUR PROJECT NAMES HERE
// ---
const projects = [
  {
    id: '17r1UmAMrrvd3Sh0QBuCIewg7Uj-UndB5',
    viewUrl: 'https://drive.google.com/file/d/17r1UmAMrrvd3Sh0QBuCIewg7Uj-UndB5/view',
    name: 'Photography' // <-- EDIT THIS
  },
  {
    id: '1CLT9WKEvlMEZh5ziTboZgqBDNDWYFdx9',
    viewUrl: 'https://drive.google.com/file/d/1CLT9WKEvlMEZh5ziTboZgqBDNDWYFdx9/view',
    name: 'Photography' // <-- EDIT THIS
  },
  {
    id: '16XhM6_egRl4mqqGxBG0xnFBwdMUR8R2A',
    viewUrl: 'https://drive.google.com/file/d/16XhM6_egRl4mqqGxBG0xnFBwdMUR8R2A/view',
    name: 'Photography' // <-- EDIT THIS
  },
  {
    id: '1qZezs2fmkzqiQmk1Kom0l-WE2sPa_ZP3',
    viewUrl: 'https://drive.google.com/file/d/1qZezs2fmkzqiQmk1Kom0l-WE2sPa_ZP3/view',
    name: 'Photography' // <-- EDIT THIS
  },
  {
    id: '1C4V956un-IS7aetW3iikGXRa4DD7iNaF',
    viewUrl: 'https://drive.google.com/file/d/1C4V956un-IS7aetW3iikGXRa4DD7iNaF/view',
    name: 'Photography' // <-- EDIT THIS
  },
  {
    id: '1LN0kA626YQiHy_FqViXyCkUovkI2plbP',
    viewUrl: 'https://drive.google.com/file/d/1LN0kA626YQiHy_FqViXyCkUovkI2plbP/view',
    name: 'Videography' // <-- EDIT THIS
  },
  // {
  //   id: '1hAvcgOf5oXQPAkhJ3FFbWj4mxvu9are7',
  //   viewUrl: 'https://drive.google.com/file/d/1hAvcgOf5oXQPAkhJ3FFbWj4mxvu9are7/view',
  //   name: 'Videography' // <-- EDIT THIS
  // },
  // {
  //   id: '1IwHHFL6BnOhS9VFlohGPVA2UjiegInru',
  //   viewUrl: 'https://drive.google.com/file/d/1IwHHFL6BnOhS9VFlohGPVA2UjiegInru/view',
  //   name: 'Videography' // <-- EDIT THIS
  // },
  {
    id: '1bjK4cV33ssM1iZSHwr7UETyGIqmfHRu1',
    viewUrl: 'https://drive.google.com/file/d/1bjK4cV33ssM1iZSHwr7UETyGIqmfHRu1/view',
    name: 'Videography' // <-- EDIT THIS
  }
];


export default function WorkPage() {
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
    const start = setTimeout(() => {
      if (heroTitleSpan) {
        heroTitleSpan.style.transform = 'translateY(0)'
        heroTitleSpan.style.opacity = '1'
      }
    }, 500) // Initial delay
    return () => clearTimeout(start)
  }, [])

  return (
    <main>
      <style>{`
        /* --- HERO & NEW STYLES --- */
        .hero {
          height: 80vh; 
          min-height: 600px; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 10%;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,#f5f7fa 0%,#e4e7f1 100%);
          text-align: center;
        }
        .floating-elements{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;pointer-events:none}
        .floating-element{position:absolute;opacity:.9;z-index:10;animation:float 6s ease-in-out infinite}
        .floating-element.circle{width:clamp(80px,25vw,200px);height:clamp(80px,25vw,200px);border-radius:50%;background-color:var(--yellow);top:20%;right:10%}
        .floating-element.square{width:clamp(60px,20vw,150px);height:clamp(60px,20vw,150px);background-color:var(--blue);bottom:15%;left:10%;animation-delay:1s}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-20px) rotate(5deg)}}
        .hero-content {
          position: relative;
          z-index: 20; 
        }
        .hero-title {
          font-family: 'Commissioner', sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 8vw, 4rem);
          line-height: 1;
          margin: 0;
          color: var(--blue);
          overflow: hidden;
        }
        .hero-title span {
          display: inline-block;
          transform: translateY(100%);
          opacity: 0;
          transition: transform .6s ease, opacity .6s ease;
        }
        /* --- END HERO --- */

        .grid{padding:4rem 5%;display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
        
        .card {
          display: block; 
          text-decoration: none; 
          background: #fff;
          border: 1px solid rgba(0,0,0,.05);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,.06);
          transition: transform .3s, box-shadow .3s;
        }
        .card:hover{transform:translateY(-6px);box-shadow:0 16px 28px rgba(0,0,0,.1)}
        .thumb{aspect-ratio:4/3;background:#eaeaea; border-bottom: 1px solid rgba(0,0,0,.05);}
        .thumb img{width:100%;height:100%;object-fit:cover;display:block}
        .card-body{padding:1rem 1.1rem}
        .title{font-weight:700;color:#111;margin:.25rem 0}
        .meta{font-size:.9rem;color:#555}
      `}</style>

      {/* --- HERO JSX --- */}
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-element circle"></div>
          <div className="floating-element square"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Our Work</span>
          </h1>
        </div>
      </section>

      {/* --- GRID UPDATED --- */}
      <section className="grid">
        {projects.map((project) => (
          <a
            className="card"
            key={project.id}
            href={project.viewUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <div className="thumb">
              <img 
                src={`https://drive.google.com/thumbnail?id=${project.id}&sz=w600`} 
                alt={project.name}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="card-body">
              <h3 className="title">{project.name}</h3>
              <div className="meta"></div>
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}