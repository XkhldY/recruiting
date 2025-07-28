import React from 'react';
import { colors } from '../theme/colors';

const ColorReference: React.FC = () => {
  const ColorSwatch = ({ color, name, code }: { color: string; name: string; code: string }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      margin: '0.5rem',
      background: colors.white,
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: color,
        borderRadius: '8px',
        marginRight: '1rem',
        border: '1px solid #e2e8f0'
      }} />
      <div>
        <div style={{ fontWeight: '600', fontSize: '1rem', color: '#2d3748' }}>{name}</div>
        <div style={{ fontSize: '0.875rem', color: '#718096', fontFamily: 'monospace' }}>{code}</div>
      </div>
    </div>
  );

  const ColorGroup = ({ title, colorObj }: { title: string; colorObj: any }) => (
    <div style={{ marginBottom: '3rem' }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '1rem', 
        color: '#2d3748',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0.5rem'
      }}>
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
        {typeof colorObj === 'object' ? 
          Object.entries(colorObj).map(([key, value]) => (
            <ColorSwatch key={key} color={value as string} name={`${title.toLowerCase()}.${key}`} code={value as string} />
          )) :
          <ColorSwatch color={colorObj} name={title.toLowerCase()} code={colorObj} />
        }
      </div>
    </div>
  );

  return (
    <div style={{
      padding: '2rem',
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            margin: '0 0 1rem 0', 
            background: 'linear-gradient(135deg, #2d3748, #4a5568)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            TalentFlow Color Reference
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#718096' }}>
            Complete color palette and usage guide
          </p>
        </header>

        <ColorGroup title="Primary" colorObj={colors.primary} />
        <ColorGroup title="Accent" colorObj={colors.accent} />
        <ColorGroup title="Gray" colorObj={colors.gray} />
        
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1rem', 
            color: '#2d3748',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '0.5rem'
          }}>
            Semantic Colors
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
            <ColorSwatch color={colors.success} name="success" code={colors.success} />
            <ColorSwatch color={colors.warning} name="warning" code={colors.warning} />
            <ColorSwatch color={colors.white} name="white" code={colors.white} />
            <ColorSwatch color={colors.black} name="black" code={colors.black} />
          </div>
        </div>

        <div style={{
          background: colors.white,
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          marginTop: '3rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748' }}>Usage Guidelines</h3>
          <div style={{ color: '#718096', lineHeight: '1.6' }}>
            <p><strong>Primary:</strong> Main brand colors for headers, buttons, and key UI elements</p>
            <p><strong>Accent:</strong> Call-to-action elements, highlights, and interactive states</p>
            <p><strong>Gray:</strong> Text, borders, backgrounds, and neutral elements</p>
            <p><strong>Success:</strong> Positive actions, confirmations, and success states</p>
            <p><strong>Warning:</strong> Alerts, cautions, and attention-grabbing elements</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem' }}>
          <a 
            href="#" 
            onClick={() => window.location.hash = ''}
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              color: colors.white,
              background: 'linear-gradient(135deg, #2d3748, #4a5568)',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(45, 55, 72, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            Back to Main Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColorReference;