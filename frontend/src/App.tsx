import './index.css';
import ClientLogos from './components/ClientLogos';
import { colors } from './theme/colors';

const heroImage = '/hero-image.svg';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: `1px solid rgba(74, 85, 104, 0.3)`, backgroundColor: 'rgba(26, 32, 44, 0.9)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: colors.white, textShadow: '0 0 20px rgba(56, 161, 105, 0.5)' }}>
      TalentFlow
    </div>
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li><a href="#features" style={{ textDecoration: 'none', color: colors.gray[300], fontWeight: '500', transition: 'color 0.2s ease' }}>Features</a></li>
        <li><a href="#pricing" style={{ textDecoration: 'none', color: colors.gray[300], fontWeight: '500', transition: 'color 0.2s ease' }}>Pricing</a></li>
        <li><a href="#blog" style={{ textDecoration: 'none', color: colors.gray[300], fontWeight: '500', transition: 'color 0.2s ease' }}>Blog</a></li>
        <li><a href="#login" style={{ textDecoration: 'none', color: colors.gray[300], fontWeight: '500', transition: 'color 0.2s ease' }}>Login</a></li>
        <li><a href="#signup" style={{ textDecoration: 'none', color: colors.white, backgroundColor: colors.success, padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', boxShadow: '0 4px 15px rgba(56, 161, 105, 0.4)', transition: 'all 0.2s ease' }}>Sign Up</a></li>
      </ul>
    </nav>
  </header>
);

const HeroSection = () => (
  <section style={{ display: 'flex', alignItems: 'center', padding: '4rem 2rem', minHeight: '90vh', background: 'transparent' }}>
    <div style={{ flex: 1, paddingRight: '2rem' }}>
      <h1 style={{ fontSize: '3.5rem', margin: 0, color: colors.white, fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Hire Top Remote Talent</h1>
      <p style={{ fontSize: '1.25rem', color: colors.gray[300], marginTop: '1rem', lineHeight: '1.6', maxWidth: '90%' }}>
        Get access to our pool of handpicked, pre-vetted remote software engineers, designers, and product managers.
      </p>
      <a href="#signup" style={{ display: 'inline-block', marginTop: '2.5rem', textDecoration: 'none', color: colors.white, backgroundColor: colors.success, padding: '1rem 2.5rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '600', boxShadow: '0 4px 12px rgba(56, 161, 105, 0.3)', transition: 'all 0.3s ease', transform: 'translateY(0)' }}>
        Hire Talent
      </a>
    </div>
    <div style={{ flex: 1 }}>
      <img src={heroImage} alt="Remote Talent" style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" style={{ padding: '5rem 2rem', backgroundColor: 'rgba(45, 55, 72, 0.4)', backdropFilter: 'blur(20px)' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.75rem', marginBottom: '4rem', color: colors.white, fontWeight: '700', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Key Features</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      <div style={{ padding: '2.5rem', border: `1px solid rgba(203, 213, 224, 0.3)`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', transition: 'all 0.3s ease' }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.accent[500], fontWeight: '600', marginBottom: '1rem' }}>Candidate Tracking</h3>
        <p style={{ color: colors.gray[500], lineHeight: '1.6' }}>Effortlessly manage your candidates from application to hire with our intuitive applicant tracking system.</p>
      </div>
      <div style={{ padding: '2.5rem', border: `1px solid rgba(203, 213, 224, 0.3)`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', transition: 'all 0.3s ease' }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.accent[500], fontWeight: '600', marginBottom: '1rem' }}>Interview Scheduling</h3>
        <p style={{ color: colors.gray[500], lineHeight: '1.6' }}>Automate interview scheduling and coordination with candidates and your team.</p>
      </div>
      <div style={{ padding: '2.5rem', border: `1px solid rgba(203, 213, 224, 0.3)`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', transition: 'all 0.3s ease' }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.accent[500], fontWeight: '600', marginBottom: '1rem' }}>Advanced Analytics</h3>
        <p style={{ color: colors.gray[500], lineHeight: '1.6' }}>Gain insights into your recruitment process with powerful analytics and reporting.</p>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" style={{ padding: '5rem 2rem', backgroundColor: 'rgba(45, 55, 72, 0.6)', backdropFilter: 'blur(20px)' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.75rem', marginBottom: '4rem', color: colors.white, fontWeight: '700', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Pricing Plans</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Basic Plan */}
      <div style={{ padding: '2.5rem', border: `1px solid ${colors.gray[300]}`, borderRadius: '16px', backgroundColor: colors.white, textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease' }}>
        <h3 style={{ fontSize: '1.8rem', color: colors.primary[500], fontWeight: '600', marginBottom: '1rem' }}>Basic</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: colors.gray[900], marginBottom: '2rem' }}>$19<span style={{ fontSize: '1rem', color: colors.gray[500] }}>/mo</span></p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>5 Job Postings</li>
          <li style={{ marginBottom: '1rem' }}>Basic Candidate Tracking</li>
          <li style={{ marginBottom: '1rem' }}>Email Support</li>
        </ul>
        <a href="#signup" style={{ display: 'inline-block', textDecoration: 'none', color: colors.primary[500], border: `2px solid ${colors.primary[500]}`, padding: '0.8rem 2rem', borderRadius: '8px', fontWeight: '600', transition: 'all 0.2s ease' }}>
          Choose Plan
        </a>
      </div>
      {/* Pro Plan */}
      <div style={{ padding: '2.5rem', border: `2px solid ${colors.success}`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(15px)', textAlign: 'center', transform: 'scale(1.05)', boxShadow: '0 16px 40px rgba(56, 161, 105, 0.25)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: colors.success, color: colors.white, padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '600' }}>Most Popular</div>
        <h3 style={{ fontSize: '1.8rem', color: colors.success, fontWeight: '600', marginBottom: '1rem' }}>Pro</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: colors.gray[900], marginBottom: '2rem' }}>$49<span style={{ fontSize: '1rem', color: colors.gray[500] }}>/mo</span></p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>Unlimited Job Postings</li>
          <li style={{ marginBottom: '1rem' }}>Advanced Candidate Tracking</li>
          <li style={{ marginBottom: '1rem' }}>Priority Email Support</li>
          <li style={{ marginBottom: '1rem' }}>Interview Scheduling</li>
        </ul>
        <a href="#signup" style={{ display: 'inline-block', textDecoration: 'none', color: colors.white, backgroundColor: colors.success, padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: '600', boxShadow: '0 4px 12px rgba(56, 161, 105, 0.3)', transition: 'all 0.2s ease' }}>
          Choose Plan
        </a>
      </div>
      {/* Enterprise Plan */}
      <div style={{ padding: '2.5rem', border: `1px solid ${colors.gray[300]}`, borderRadius: '16px', backgroundColor: colors.white, textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease' }}>
        <h3 style={{ fontSize: '1.8rem', color: colors.primary[500], fontWeight: '600', marginBottom: '1rem' }}>Enterprise</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: colors.gray[900], marginBottom: '2rem' }}>Contact Us</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>All Pro Features</li>
          <li style={{ marginBottom: '1rem' }}>Dedicated Account Manager</li>
          <li style={{ marginBottom: '1rem' }}>Custom Integrations</li>
        </ul>
        <a href="#contact" style={{ display: 'inline-block', textDecoration: 'none', color: colors.primary[500], border: `2px solid ${colors.primary[500]}`, padding: '0.8rem 2rem', borderRadius: '8px', fontWeight: '600', transition: 'all 0.2s ease' }}>
          Contact Sales
        </a>
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section id="blog" style={{ padding: '5rem 2rem', backgroundColor: 'rgba(45, 55, 72, 0.3)', backdropFilter: 'blur(20px)' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.75rem', marginBottom: '4rem', color: colors.white, fontWeight: '700', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>From Our Blog</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Blog Post 1 */}
      <div style={{ border: `1px solid rgba(203, 213, 224, 0.3)`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', transition: 'all 0.3s ease' }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.gray[900], fontWeight: '600', marginBottom: '1rem' }}>7 Tips for a More Effective Hiring Process</h3>
          <p style={{ color: colors.gray[500], marginBottom: '1.5rem', lineHeight: '1.6' }}>Discover how to streamline your recruitment and attract top talent with these practical tips.</p>
          <a href="#" style={{ textDecoration: 'none', color: colors.accent[500], fontWeight: '600', transition: 'color 0.2s ease' }}>Read More &rarr;</a>
        </div>
      </div>
      {/* Blog Post 2 */}
      <div style={{ border: `1px solid rgba(203, 213, 224, 0.3)`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', transition: 'all 0.3s ease' }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.gray[900], fontWeight: '600', marginBottom: '1rem' }}>The Future of AI in Recruiting</h3>
          <p style={{ color: colors.gray[500], marginBottom: '1.5rem', lineHeight: '1.6' }}>Explore how artificial intelligence is transforming the way companies find and hire new employees.</p>
          <a href="#" style={{ textDecoration: 'none', color: colors.accent[500], fontWeight: '600', transition: 'color 0.2s ease' }}>Read More &rarr;</a>
        </div>
      </div>
      {/* Blog Post 3 */}
      <div style={{ border: `1px solid rgba(203, 213, 224, 0.3)`, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', transition: 'all 0.3s ease' }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 3" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.gray[900], fontWeight: '600', marginBottom: '1rem' }}>Building a Strong Company Culture</h3>
          <p style={{ color: colors.gray[500], marginBottom: '1.5rem', lineHeight: '1.6' }}>Learn why a positive company culture is crucial for attracting and retaining top performers.</p>
          <a href="#" style={{ textDecoration: 'none', color: colors.accent[500], fontWeight: '600', transition: 'color 0.2s ease' }}>Read More &rarr;</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: colors.gray[900], color: colors.white, padding: '4rem 2rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
      <div>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: colors.white, fontWeight: '600' }}>TalentFlow</h4>
        <p style={{ color: colors.gray[300], lineHeight: 1.6 }}>The modern recruiting software to streamline your hiring process.</p>
      </div>
      <div>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: colors.white, fontWeight: '600' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#features" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>Features</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#pricing" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>Pricing</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#blog" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: colors.white, fontWeight: '600' }}>Legal</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>Privacy Policy</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: colors.white, fontWeight: '600' }}>Connect With Us</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>Twitter</a>
          <a href="#" style={{ textDecoration: 'none', color: colors.gray[300], transition: 'color 0.2s ease' }}>LinkedIn</a>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #444' }}>
      <p style={{ color: colors.gray[300], fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} TalentFlow. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div style={{ 
      background: `
        radial-gradient(circle at 20% 50%, rgba(74, 85, 104, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(229, 62, 62, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(56, 161, 105, 0.15) 0%, transparent 50%),
        linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)
      `,
      minHeight: '100vh',
      color: colors.gray[100],
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <PricingSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
