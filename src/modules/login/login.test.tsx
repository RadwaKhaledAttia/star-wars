/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './index';
import AuthService from '../../services/auth';

jest.mock('../../services/auth', () => ({
  login: jest.fn(),
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('disables submit button when required fields are empty', async () => {
    const { getByPlaceholderText, getByRole } = render(
      <Login open={true} handleClose={() => {}} setAuthenticated={() => {}} />
    );

    const submitButton = getByRole('button', { name: 'Log In' });


    fireEvent.change(getByPlaceholderText('Enter username'), { target: { value: 'testuser' } });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    fireEvent.change(getByPlaceholderText('Enter password'), { target: { value: 'password123' } });

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  test('handles login submission and error', async () => {
    const { getByPlaceholderText, getByRole, getByText } = render(
      <Login open={true} handleClose={() => {}} setAuthenticated={() => {}} />
    );

    const submitButton = getByRole('button', { name: 'Log In' });

    (AuthService.login as jest.Mock).mockRejectedValue(new Error('Invalid credentials'));

    fireEvent.change(getByPlaceholderText('Enter username'), { target: { value: 'user' } });
    fireEvent.change(getByPlaceholderText('Enter password'), { target: { value: '123456' } });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(getByText('Invalid username or password')).toBeInTheDocument();
      expect(AuthService.login).toHaveBeenCalledWith('user', '123456');
    });
  });

});
