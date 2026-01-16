
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} Reliable Movers & Packers. All Rights Reserved.
        </p>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/service">Services</a>
          <a href="/contact">Contact</a>
        </div>

      </div>
    </footer>
  );
}
