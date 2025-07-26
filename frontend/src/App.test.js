import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the ClientLogos component since it uses require.context which doesn't work in Jest
jest.mock('./components/ClientLogos', () => {
  return function ClientLogos() {
    return <div data-testid="client-logos">Mock Client Logos</div>;
  };
});

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hire Top Remote Talent/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders features section', () => {
  render(<App />);
  const featuresElement = screen.getByText(/Key Features/i);
  expect(featuresElement).toBeInTheDocument();
});

test('renders pricing section', () => {
  render(<App />);
  const pricingElement = screen.getByText(/Pricing Plans/i);
  expect(pricingElement).toBeInTheDocument();
});
