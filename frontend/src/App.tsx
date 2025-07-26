import './index.css';
import ClientLogos from './components/ClientLogos';
const heroImage = '/hero-image.svg';

const colors = {
  primary: '#5A67D8',
  accent: '#ED8936',
  background: '#F7FAFC',
  text: '#2D3748',
  white: '#ffffff',
  footerBackground: '#2C3E50'
};

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #eee', backgroundColor: colors.white }}>
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors.primary }}>
      Your Logo
    </div>
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li><a href="#features" style={{ textDecoration: 'none', color: colors.text }}>Features</a></li>
        <li><a href="#pricing" style={{ textDecoration: 'none', color: colors.text }}>Pricing</a></li>
        <li><a href="#blog" style={{ textDecoration: 'none', color: colors.text }}>Blog</a></li>
        <li><a href="#login" style={{ textDecoration: 'none', color: colors.text }}>Login</a></li>
        <li><a href="#signup" style={{ textDecoration: 'none', color: colors.white, backgroundColor: colors.primary, padding: '0.5rem 1rem', borderRadius: '5px' }}>Sign Up</a></li>
      </ul>
    </nav>
  </header>
);

const HeroSection = () => (
  <section style={{ display: 'flex', alignItems: 'center', padding: '4rem 2rem', minHeight: '100vh' }}>
    <div style={{ flex: 1, paddingRight: '2rem' }}>
      <h1 style={{ fontSize: '3.5rem', margin: 0, color: colors.text }}>Hire Top Remote Talent</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
        Get access to our pool of handpicked, pre-vetted remote software engineers, designers, and product managers.
      </p>
      <a href="#signup" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none', color: colors.white, backgroundColor: colors.primary, padding: '1rem 2rem', borderRadius: '5px', fontSize: '1.1rem' }}>
        Hire Talent
      </a>
    </div>
    <div style={{ flex: 1 }}>
      <img src={heroImage} alt="Remote Talent" style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" style={{ padding: '4rem 2rem', backgroundColor: colors.background }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: colors.text }}>Key Features</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: colors.white }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.accent }}>Candidate Tracking</h3>
        <p style={{ color: '#666' }}>Effortlessly manage your candidates from application to hire with our intuitive applicant tracking system.</p>
      </div>
      <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: colors.white }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.accent }}>Interview Scheduling</h3>
        <p style={{ color: '#666' }}>Automate interview scheduling and coordination with candidates and your team.</p>
      </div>
      <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: colors.white }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.accent }}>Advanced Analytics</h3>
        <p style={{ color: '#666' }}>Gain insights into your recruitment process with powerful analytics and reporting.</p>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" style={{ padding: '4rem 2rem', backgroundColor: colors.white }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: colors.text }}>Pricing Plans</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Basic Plan */}
      <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', color: colors.primary }}>Basic</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: colors.text }}>$19<span style={{ fontSize: '1rem', color: '#666' }}>/mo</span></p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>5 Job Postings</li>
          <li style={{ marginBottom: '1rem' }}>Basic Candidate Tracking</li>
          <li style={{ marginBottom: '1rem' }}>Email Support</li>
        </ul>
        <a href="#signup" style={{ display: 'inline-block', textDecoration: 'none', color: colors.primary, border: `2px solid ${colors.primary}`, padding: '0.8rem 2rem', borderRadius: '5px', fontWeight: 'bold' }}>
          Choose Plan
        </a>
      </div>
      {/* Pro Plan */}
      <div style={{ padding: '2rem', border: `2px solid ${colors.primary}`, borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center', transform: 'scale(1.05)' }}>
        <h3 style={{ fontSize: '1.8rem', color: colors.primary }}>Pro</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: colors.text }}>$49<span style={{ fontSize: '1rem', color: '#666' }}>/mo</span></p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>Unlimited Job Postings</li>
          <li style={{ marginBottom: '1rem' }}>Advanced Candidate Tracking</li>
          <li style={{ marginBottom: '1rem' }}>Priority Email Support</li>
          <li style={{ marginBottom: '1rem' }}>Interview Scheduling</li>
        </ul>
        <a href="#signup" style={{ display: 'inline-block', textDecoration: 'none', color: colors.white, backgroundColor: colors.primary, padding: '0.8rem 2rem', borderRadius: '5px', fontWeight: 'bold' }}>
          Choose Plan
        </a>
      </div>
      {/* Enterprise Plan */}
      <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', color: colors.primary }}>Enterprise</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: colors.text }}>Contact Us</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>All Pro Features</li>
          <li style={{ marginBottom: '1rem' }}>Dedicated Account Manager</li>
          <li style={{ marginBottom: '1rem' }}>Custom Integrations</li>
        </ul>
        <a href="#contact" style={{ display: 'inline-block', textDecoration: 'none', color: colors.primary, border: `2px solid ${colors.primary}`, padding: '0.8rem 2rem', borderRadius: '5px', fontWeight: 'bold' }}>
          Contact Sales
        </a>
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section id="blog" style={{ padding: '4rem 2rem' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: colors.text }}>From Our Blog</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Blog Post 1 */}
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: colors.white, overflow: 'hidden' }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.primary }}>7 Tips for a More Effective Hiring Process</h3>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>Discover how to streamline your recruitment and attract top talent with these practical tips.</p>
          <a href="#" style={{ textDecoration: 'none', color: colors.accent, fontWeight: 'bold' }}>Read More &rarr;</a>
        </div>
      </div>
      {/* Blog Post 2 */}
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: colors.white, overflow: 'hidden' }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.primary }}>The Future of AI in Recruiting</h3>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>Explore how artificial intelligence is transforming the way companies find and hire new employees.</p>
          <a href="#" style={{ textDecoration: 'none', color: colors.accent, fontWeight: 'bold' }}>Read More &rarr;</a>
        </div>
      </div>
      {/* Blog Post 3 */}
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: colors.white, overflow: 'hidden' }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 3" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: 0, color: colors.primary }}>Building a Strong Company Culture</h3>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>Learn why a positive company culture is crucial for attracting and retaining top performers.</p>
          <a href="#" style={{ textDecoration: 'none', color: colors.accent, fontWeight: 'bold' }}>Read More &rarr;</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: colors.footerBackground, color: '#fff', padding: '3rem 2rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
      <div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>RecruitCo</h4>
        <p style={{ color: '#ccc', lineHeight: 1.6 }}>The modern recruiting software to streamline your hiring process.</p>
      </div>
      <div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#features" style={{ textDecoration: 'none', color: '#ccc' }}>Features</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#pricing" style={{ textDecoration: 'none', color: '#ccc' }}>Pricing</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#blog" style={{ textDecoration: 'none', color: '#ccc' }}>Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Legal</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ textDecoration: 'none', color: '#ccc' }}>Privacy Policy</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ textDecoration: 'none', color: '#ccc' }}>Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Connect With Us</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#ccc' }}>Twitter</a>
          <a href="#" style={{ textDecoration: 'none', color: '#ccc' }}>LinkedIn</a>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #444' }}>
      <p style={{ color: '#ccc', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} RecruitCo. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div style={{ background: `linear-gradient(to bottom, ${colors.background}, #E2E8F0)`, color: colors.text }}>
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
