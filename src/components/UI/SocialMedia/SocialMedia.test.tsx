import { render, screen } from '@testing-library/react';
import { SocialMedia } from './SocialMedia';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/theme';

jest.mock('react-icons/im', () => ({
  ImLinkedin: () => <svg data-testid='linkedin-icon' />,
  ImGithub: () => <svg data-testid='github-icon' />,
  ImTwitter: () => <svg data-testid='twitter-icon' />,
}));

describe('SocialMedia component', () => {
  it('renders component icons', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <SocialMedia />
      </ThemeProvider>,
    );

    const linkedinIcon = screen.getByTestId('linkedin-icon');
    const gitIcon = screen.getByTestId('github-icon');
    const twitterIcon = screen.getByTestId('twitter-icon');

    expect(linkedinIcon).toBeInTheDocument();
    expect(gitIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <SocialMedia />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('linkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/yuliia-dikun/',
    );
    expect(screen.getByTestId('github')).toHaveAttribute(
      'href',
      'https://github.com/YuliiaDikun',
    );
    expect(screen.getByTestId('twitter')).toHaveAttribute(
      'href',
      'https://twitter.com/Midnight_Jul',
    );
  });
});
