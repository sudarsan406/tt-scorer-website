import React, { useEffect, useState } from 'react';
import './App.css';
import Privacy from './Privacy';
import Terms from './Terms';

// Simple hash-based router
function useHashRouter() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return route;
}

function App() {
  const route = useHashRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Route handling for GitHub Pages (hash-based routing)
  if (route === '/privacy' || route === 'privacy') {
    return <Privacy />;
  }
  if (route === '/terms' || route === 'terms') {
    return <Terms />;
  }

  const features = [
    {
      icon: "🏓",
      title: "Live Match Scoring",
      description: "Track every point with set-by-set scoring. Intuitive interface designed for fast-paced matches."
    },
    {
      icon: "🏆",
      title: "Tournament Management",
      description: "Organize Single Elimination and Round Robin tournaments with automatic bracket generation."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Interactive dashboards with win/loss trends, match outcomes, and performance insights."
    },
    {
      icon: "⭐",
      title: "Elo Rating System",
      description: "Professional-grade Elo calculations with visual progression tracking and competitive adjustments."
    },
    {
      icon: "📱",
      title: "Player Profiles",
      description: "Complete match history, rankings, and statistics for every player in your network."
    },
    {
      icon: "📤",
      title: "Data Export",
      description: "Export matches, statistics, and tournament data for analysis or record keeping."
    }
  ];

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      {/* Navigation */}
      <nav className={`nav ${isVisible ? 'visible' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/apple-touch-icon.png'} alt="TT Scorer" className="logo-icon-img" />
            <span className="logo-text">TT SCORER</span>
          </div>
          <a 
            href="https://apps.apple.com/app/id6752398902" 
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now Available on iOS
          </div>
          <h1 className="hero-title">
            <span className="title-line">ELEVATE YOUR</span>
            <span className="title-line accent">TABLE TENNIS</span>
            <span className="title-line">GAME</span>
          </h1>
          <p className="hero-subtitle">
            Professional scoring, tournament management, and Elo rating analytics 
            designed for serious players and tournament organizers.
          </p>
          <div className="cta-download">
            <a 
              href="https://apps.apple.com/app/id6752398902" 
              className="cta-button primary large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download Free on App Store
            </a>
            <div className="qr-code-container">
              <img 
                src={process.env.PUBLIC_URL + '/app-store-qr.png'} 
                alt="Scan to download TT Scorer" 
                className="qr-code"
              />
              <span className="qr-label">Scan to download</span>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">∞</span>
              <span className="stat-label">Matches</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">2</span>
              <span className="stat-label">Tournament Types</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">Elo</span>
              <span className="stat-label">Rating System</span>
            </div>
          </div>
        </div>
        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="mock-header">
                    <span>Live Match</span>
                  </div>
                  <div className="mock-score">
                    <div className="mock-player">
                      <div className="player-name">Player 1</div>
                      <div className="player-score">11</div>
                    </div>
                    <div className="mock-vs">VS</div>
                    <div className="mock-player">
                      <div className="player-name">Player 2</div>
                      <div className="player-score">9</div>
                    </div>
                  </div>
                  <div className="mock-sets">
                    <div className="set-indicator active"></div>
                    <div className="set-indicator active"></div>
                    <div className="set-indicator"></div>
                    <div className="set-indicator"></div>
                    <div className="set-indicator"></div>
                  </div>
                  <div className="mock-elo">
                    <div className="elo-badge">
                      <span className="elo-label">Elo Rating</span>
                      <span className="elo-value">1847</span>
                      <span className="elo-change">+23</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-glow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-tag">FEATURES</span>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">
            From casual games to competitive tournaments, TT Scorer has you covered
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics Showcase */}
      <section className="showcase">
        <div className="showcase-content">
          <span className="section-tag">ANALYTICS</span>
          <h2 className="section-title">Track Your Progress</h2>
          <p className="showcase-text">
            Visualize your journey with comprehensive analytics. Watch your Elo rating 
            climb, analyze match patterns, and identify areas for improvement with 
            interactive charts and detailed statistics.
          </p>
          <ul className="showcase-list">
            <li>
              <span className="check-icon">✓</span>
              Visual Elo progression tracking
            </li>
            <li>
              <span className="check-icon">✓</span>
              Win/loss trend analysis
            </li>
            <li>
              <span className="check-icon">✓</span>
              Head-to-head comparisons
            </li>
            <li>
              <span className="check-icon">✓</span>
              Performance over time periods
            </li>
          </ul>
        </div>
        <div className="showcase-visual">
          <div className="chart-mockup">
            <div className="chart-header">
              <span>Elo Rating Progress</span>
              <span className="chart-period">Last 30 days</span>
            </div>
            <div className="chart-graph">
              <svg viewBox="0 0 300 150" className="chart-line">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff9500" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ff9500" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M0,120 Q30,110 60,100 T120,85 T180,60 T240,45 T300,20" 
                  fill="none" 
                  stroke="#ff9500" 
                  strokeWidth="3"
                  className="chart-path"
                />
                <path 
                  d="M0,120 Q30,110 60,100 T120,85 T180,60 T240,45 T300,20 L300,150 L0,150 Z" 
                  fill="url(#chartGradient)"
                  className="chart-fill"
                />
              </svg>
              <div className="chart-dots">
                <div className="chart-dot" style={{left: '0%', bottom: '20%'}}></div>
                <div className="chart-dot" style={{left: '20%', bottom: '33%'}}></div>
                <div className="chart-dot" style={{left: '40%', bottom: '43%'}}></div>
                <div className="chart-dot" style={{left: '60%', bottom: '60%'}}></div>
                <div className="chart-dot" style={{left: '80%', bottom: '70%'}}></div>
                <div className="chart-dot" style={{left: '100%', bottom: '87%'}}></div>
              </div>
            </div>
            <div className="chart-stats">
              <div className="chart-stat">
                <span className="chart-stat-label">Current</span>
                <span className="chart-stat-value">1847</span>
              </div>
              <div className="chart-stat">
                <span className="chart-stat-label">Peak</span>
                <span className="chart-stat-value">1892</span>
              </div>
              <div className="chart-stat">
                <span className="chart-stat-label">Change</span>
                <span className="chart-stat-value positive">+156</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="tournament">
        <div className="tournament-visual">
          <div className="bracket-mockup">
            <div className="bracket-round">
              <div className="bracket-match">
                <div className="bracket-player winner">Player A</div>
                <div className="bracket-player">Player B</div>
              </div>
              <div className="bracket-match">
                <div className="bracket-player">Player C</div>
                <div className="bracket-player winner">Player D</div>
              </div>
            </div>
            <div className="bracket-connector"></div>
            <div className="bracket-round final">
              <div className="bracket-match">
                <div className="bracket-player winner">Player A</div>
                <div className="bracket-player">Player D</div>
              </div>
            </div>
            <div className="bracket-trophy">🏆</div>
          </div>
        </div>
        <div className="tournament-content">
          <span className="section-tag">TOURNAMENTS</span>
          <h2 className="section-title">Organize Like a Pro</h2>
          <p className="showcase-text">
            Run professional tournaments with automatic bracket generation, 
            real-time standings, and comprehensive result tracking. Perfect 
            for clubs, leagues, and casual competitions alike.
          </p>
          <div className="tournament-types">
            <div className="tournament-type">
              <div className="type-icon">🎯</div>
              <div className="type-info">
                <h4>Single Elimination</h4>
                <p>Classic knockout format with automatic advancement</p>
              </div>
            </div>
            <div className="tournament-type">
              <div className="type-icon">🔄</div>
              <div className="type-info">
                <h4>Round Robin</h4>
                <p>Everyone plays everyone with full standings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Level Up?</h2>
          <p className="cta-text">
            Join players who are taking their table tennis seriously. 
            Download TT Scorer today and start tracking your journey to the top.
          </p>
          <div className="cta-download">
            <a 
              href="https://apps.apple.com/app/id6752398902" 
              className="cta-button primary large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download Free on App Store
            </a>
            <div className="qr-code-container">
              <img 
                src={process.env.PUBLIC_URL + '/app-store-qr.png'} 
                alt="Scan to download TT Scorer" 
                className="qr-code"
              />
              <span className="qr-label">Scan to download</span>
            </div>
          </div>
        </div>
        <div className="cta-decoration">
          <div className="floating-ball ball-1">🏓</div>
          <div className="floating-ball ball-2">🏓</div>
          <div className="floating-ball ball-3">🏓</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + '/apple-touch-icon.png'} alt="TT Scorer" className="logo-icon-img" />
              <span className="logo-text">TT SCORER</span>
            </div>
            <p className="footer-tagline">
              Professional table tennis scoring & analytics
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>App</h4>
              <a href="https://apps.apple.com/app/id6752398902" target="_blank" rel="noopener noreferrer">Download</a>
              <a href="#features">Features</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:support@ttscorer.com">Support</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TT Scorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
