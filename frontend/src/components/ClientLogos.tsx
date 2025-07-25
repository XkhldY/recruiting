import React, { useEffect, useState } from 'react';
import './ClientLogos.css';

const ClientLogos: React.FC = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const importLogos = async () => {
      const logoContext = require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/);
      const logoPaths = logoContext.keys();
      const loadedLogos = logoPaths.map(path => logoContext(path));
      setLogos([...loadedLogos, ...loadedLogos]);
    };

    importLogos();
  }, []);

  return (
    <div className="client-logos-container">
      <div className="client-logos-slider">
        {logos.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt={`Client logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
