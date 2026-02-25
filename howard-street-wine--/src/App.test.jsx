import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders the Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  test('counter starts at 0', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  test('counter increments when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })

  test('renders Vite and React logo links', () => {
    render(<App />)
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
  })
})
