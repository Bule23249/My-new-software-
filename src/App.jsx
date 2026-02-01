import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">BULEBLE BUSSINESS CENTRE</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Grow Your Business With Us</h1>
        <p>We provide professional solutions for your success</p>
        <button>Get Started</button>
      </section>

      {/* About */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a trusted company helping businesses grow with modern technology
          and smart strategies.
        </p>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-box">
          <div>Web Design</div>
          <div>Marketing</div>
          <div>Consulting</div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Us</h2>
        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 BULEBLE. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;