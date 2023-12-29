/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './index';

describe('Card Component', () => {
  const character = {
    name: 'Luke Skywalker',
    url: 'https://swapi.dev/api/people/1/',
  };

  const handleClick = jest.fn(); // Mocking handleClick function

  test('renders character information', () => {
    const { getByText } = render(
      <Card character={character} handleClick={handleClick} />
    );

    expect(getByText('Luke Skywalker')).toBeInTheDocument();
    expect(getByText('url: https://swapi.dev/api/people/1/')).toBeInTheDocument();
  });

  test('calls handleClick when card is clicked', () => {
    const { getByText } = render(
      <Card character={character} handleClick={handleClick} />
    );

    fireEvent.click(getByText('Luke Skywalker'));
    expect(handleClick).toHaveBeenCalledWith(character);
  });

});
