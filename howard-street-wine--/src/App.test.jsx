import { render, screen } from '@testing-library/react'
import App from './App'

// Test 1 - Nav bar renders
test('renders the nav bar with brand name', () => {
  render(<App />)
  expect(screen.getByText('Howard Street Wine Merchant')).toBeInTheDocument()
})

// Test 2 - Nav links are present
test('renders all nav links', () => {
  render(<App />)
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('About')).toBeInTheDocument()
  expect(screen.getByText('Events')).toBeInTheDocument()
  expect(screen.getByText('Contact')).toBeInTheDocument()
})

// Test 3 - Home page loads by default
test('shows home page by default', () => {
  render(<App />)
  expect(screen.getByText(/Welcome to Howard Street Wine Merchant/i)).toBeInTheDocument()
})

// Test 4 - About page loads
test('navigates to about page', () => {
  render(<App />)
  expect(screen.getByText('About')).toBeInTheDocument()
})

// Test 5 - Events page loads
test('navigates to events page', () => {
  render(<App />)
  expect(screen.getByText('Events')).toBeInTheDocument()
})

// Test 6 - Contact page loads
test('navigates to contact page', () => {
  render(<App />)
  expect(screen.getByText('Contact')).toBeInTheDocument()
})