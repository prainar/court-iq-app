import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <Link to="/" className="brand" style={{ marginBottom: '1rem' }}>
              <span className="brand-mark" /> PBA Sports
            </Link>
            <p>AI-powered basketball performance intelligence, built to help every player improve.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <Link to="/platform">Platform</Link>
            <Link to="/platform#solutions">Solutions</Link>
            <Link to="/platform#technology">Technology</Link>
            <Link to="/platform#research">Research</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/about">About</Link>
            <Link to="/about#careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 PBA SPORTS AND ALLIED VENTURES PRIVATE LIMITED. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
