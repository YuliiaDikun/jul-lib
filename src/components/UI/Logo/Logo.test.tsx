import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/theme';

describe('Logo component', () => {
  it('renders the logo text', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={lightTheme}>
          <Logo />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const logoText = screen.getByText('Learn');
    const logoTextSecond = screen.getByText('now');
    expect(logoText).toBeInTheDocument();
    expect(logoTextSecond).toBeInTheDocument();
  });
  it('redirects to home page when clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider theme={lightTheme}>
          <Logo />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const linkElement = container.querySelector('a');
    if (linkElement) {
      expect(linkElement).toHaveAttribute('href', '/');
      userEvent.click(linkElement);
      expect(window.location.pathname).toEqual('/');
    }
  });
});
