import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('UI Tests (Page)', () => {
  beforeEach(() => {
    render(<Page />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders a searchbox', () => {
    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
  });

  it('renders a search button', () => {
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(searchButton).toBeInTheDocument();
  });

  it('renders a "pick for me" button', () => {
    const pickRandomButton = screen.getByRole('button', { name: 'Pick for me' });
    expect(pickRandomButton).toBeInTheDocument();
  });
});
