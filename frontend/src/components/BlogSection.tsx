import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const BlogSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
  <section id="blog" style={{ 
    padding: '5rem 2rem', 
    backgroundColor: theme.glass?.light || 'rgba(255, 255, 255, 0.1)', 
    backdropFilter: 'blur(20px)' 
  }}>
    <h2 style={{ 
      textAlign: 'center', 
      fontSize: '2.75rem', 
      marginBottom: '4rem', 
      color: theme.primary[600], 
      fontWeight: '700', 
      textShadow: '0 1px 2px rgba(184, 114, 61, 0.2)' 
    }}>
      From Our Blog
    </h2>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto' 
    }}>
      {/* Blog Post 1 */}
      <div style={{ 
        border: `1px solid rgba(203, 213, 224, 0.3)`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(10px)', 
        overflow: 'hidden', 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', 
        transition: 'all 0.3s ease' 
      }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '2rem' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginTop: 0, 
            color: theme.gray[900], 
            fontWeight: '600', 
            marginBottom: '1rem' 
          }}>
            7 Tips for a More Effective Hiring Process
          </h3>
          <p style={{ 
            color: theme.gray[500], 
            marginBottom: '1.5rem', 
            lineHeight: '1.6' 
          }}>
            Discover how to streamline your recruitment and attract top talent with these practical tips.
          </p>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: theme.accent[500], 
            fontWeight: '600', 
            transition: 'color 0.2s ease' 
          }}>
            Read More &rarr;
          </a>
        </div>
      </div>
      
      {/* Blog Post 2 */}
      <div style={{ 
        border: `1px solid rgba(203, 213, 224, 0.3)`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(10px)', 
        overflow: 'hidden', 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', 
        transition: 'all 0.3s ease' 
      }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '2rem' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginTop: 0, 
            color: theme.gray[900], 
            fontWeight: '600', 
            marginBottom: '1rem' 
          }}>
            The Future of AI in Recruiting
          </h3>
          <p style={{ 
            color: theme.gray[500], 
            marginBottom: '1.5rem', 
            lineHeight: '1.6' 
          }}>
            Explore how artificial intelligence is transforming the way companies find and hire new employees.
          </p>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: theme.accent[500], 
            fontWeight: '600', 
            transition: 'color 0.2s ease' 
          }}>
            Read More &rarr;
          </a>
        </div>
      </div>
      
      {/* Blog Post 3 */}
      <div style={{ 
        border: `1px solid rgba(203, 213, 224, 0.3)`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(10px)', 
        overflow: 'hidden', 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', 
        transition: 'all 0.3s ease' 
      }}>
        <img src="https://via.placeholder.com/400x250" alt="Blog Post 3" style={{ width: '100%', height: 'auto' }} />
        <div style={{ padding: '2rem' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginTop: 0, 
            color: theme.gray[900], 
            fontWeight: '600', 
            marginBottom: '1rem' 
          }}>
            Building a Strong Company Culture
          </h3>
          <p style={{ 
            color: theme.gray[500], 
            marginBottom: '1.5rem', 
            lineHeight: '1.6' 
          }}>
            Learn why a positive company culture is crucial for attracting and retaining top performers.
          </p>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: theme.accent[500], 
            fontWeight: '600', 
            transition: 'color 0.2s ease' 
          }}>
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BlogSection;