import { useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/platform', label: 'Platform', end: true },
  { to: '/about', label: 'About', end: true },
  { to: '/contact', label: 'Contact', end: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      {open && createPortal(<div className="nav-scrim" onClick={() => setOpen(false)} />, document.body)}
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" /> PBA Sports
        </NavLink>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-cta">
          <NavLink to="/contact" className="btn btn-outline">
            Request Demo
          </NavLink>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
