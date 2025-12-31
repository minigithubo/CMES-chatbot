import "./cmeMain.css";

export default function MainHero() {
  return (
      <main className="main-hero">
        <header className="header">
          <div className="logo">
            <span className="logo-mark">≡</span>
            <span className="logo-text">CMES</span>
          </div>
          <nav className="nav">
            <span>Solutions</span>
            <span>Application</span>
            <span>Resources</span>
            <span>About Us</span>
          </nav>
          <div className="header-right">
            <button className="contact-btn">Contact</button>
          </div>
        </header>
        <div className="hero-content">
          <p className="hero-subtitle">
            Redefining the Future of Smart Workflows
          </p>
          <h1 className="hero-title">
            It’s More Than Robotics
            <br />
            We Automate Intelligence
          </h1>
        </div>
      </main>
    );
  }