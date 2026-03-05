import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

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
// Integration Test 1 - clicking About navigates to About page
test('clicking About link shows About page content', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByText('About'))
  expect(screen.getByText('About Us')).toBeInTheDocument()
})

// Integration Test 2 - clicking Events navigates to Events page
test('clicking Events link shows Events page content', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('link', { name: 'Events' }))
  expect(screen.getByRole('heading', { name: 'Events' })).toBeInTheDocument()
})

// Integration Test 3 - clicking Contact navigates to Contact page
test('clicking Contact link shows Contact page content', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('link', { name: 'Contact' }))
  expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
})

// Integration Test 4 - clicking Home returns to home page
test('clicking Home link returns to home page', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByText('About'))
  await user.click(screen.getByText('Home'))
  expect(screen.getByText(/Welcome to Howard Street Wine Merchant/i)).toBeInTheDocument()
})