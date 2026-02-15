import React from 'react';

function Terms() {
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
        }}>Terms of Service</h1>
        
        <p style={{ color: '#7eb8d4', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Acceptance of Terms</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            By downloading, installing, or using TT Scorer, you agree to be bound by these 
            Terms of Service. If you do not agree to these terms, please do not use the application.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>License</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer grants you a limited, non-exclusive, non-transferable license to use 
            the application for personal, non-commercial purposes. You may not copy, modify, 
            distribute, sell, or lease any part of the application.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>User Responsibilities</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            You are responsible for maintaining the confidentiality of any data stored 
            within the application. You agree to use the application only for lawful purposes 
            and in accordance with these Terms.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Data and Content</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            All data you create within TT Scorer (including player profiles, match records, 
            and tournament data) belongs to you. We do not claim ownership of any content 
            you create. You are responsible for backing up your data as needed.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Disclaimer of Warranties</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            TT Scorer is provided "as is" without warranties of any kind, either express 
            or implied. We do not guarantee that the application will be error-free or 
            uninterrupted. Use of the application is at your own risk.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Limitation of Liability</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            To the fullest extent permitted by law, TT Scorer shall not be liable for any 
            indirect, incidental, special, consequential, or punitive damages arising from 
            your use of the application.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Updates and Modifications</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            We may update the application and these Terms from time to time. Continued use 
            of the application after any changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff9500'
          }}>Termination</h2>
          <p style={{ color: '#ccc', lineHeight: 1.7 }}>
            You may terminate your use of TT Scorer at any time by uninstalling the application. 
            We reserve the right to terminate or suspend access to the application for any 
            reason without notice.
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
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:support@ttscorer.com" style={{ color: '#ff9500' }}>
              support@ttscorer.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
