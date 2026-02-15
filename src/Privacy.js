import React from 'react';

function Privacy() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1a24',
      color: '#ffffff',
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '4rem 2rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <a href="#/" style={{ 
          color: '#ff9500', 
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '2rem'
        }}>← Back to Home</a>
        
        <h1 style={{ 
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '3rem',
          marginBottom: '2rem'
        }}>Privacy Policy</h1>
        
        <p style={{ color: '#7eb8d4', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Overview</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information 
            when you use our mobile application.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Data Collection</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer stores all data locally on your device. We do not collect, transmit, 
            or store any personal information on external servers. Your match scores, 
            player profiles, tournament data, and statistics remain entirely on your device.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Data Storage</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            All application data is stored locally using your device's secure storage. 
            This includes player information, match history, Elo ratings, tournament records, 
            and analytics data. You have full control over your data and can delete it 
            at any time by uninstalling the app or using the in-app data management features.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Data Export</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer provides data export functionality that allows you to export your 
            matches, statistics, and tournament data. This exported data is created and 
            stored on your device, and sharing it is entirely under your control.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Third-Party Services</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer does not integrate with third-party analytics, advertising, 
            or tracking services. We do not share your data with any third parties.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Children's Privacy</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer does not knowingly collect any personal information from children. 
            Since all data is stored locally and we do not collect any information, 
            the app is safe for users of all ages.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Changes to This Policy</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            We may update this Privacy Policy from time to time. Any changes will be 
            posted on this page with an updated revision date.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Contact Us</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@ttscorer.com" style={{ color: '#ff9500' }}>
              support@ttscorer.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
