/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import ButtonComponent from './index';

describe('ButtonComponent', () => {
  test('renders button with provided text', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonComponent onClick={onClick} type="submit" disabled={false}>
        Submit
      </ButtonComponent>
    );

    const buttonElement = getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders button as disabled', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonComponent onClick={onClick} type="button" disabled={true}>
        Disabled Button
      </ButtonComponent>
    );

    const buttonElement = getByText('Disabled Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });

});
