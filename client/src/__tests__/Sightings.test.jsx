import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Sightings from '../components/Sightings.jsx';

describe('properly renders Sighting component', () => {
  it('renders the table with the correct headers', () => {

    const mockSightings = [
      { sighting_number: 1, sighting_datetime: '2025-04-09', nickname: 'Fluffy', location: 'Park', healthy: true, sighter_email: 'test@example.com' },
    ];

    render(<Sightings sightings={mockSightings} />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const animalNameHeader = screen.getByRole('columnheader', { name: /Animal Name/i });
    expect(animalNameHeader).toBeInTheDocument();
  });
});