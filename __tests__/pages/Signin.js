import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';

import SignIn from '~/pages/SignIn';

import { AuthActions } from '~/store/ducks/auth';
import Toast from '~/util/toast';

jest.mock('react-redux');
jest.mock('../../src/util/toast.js');

const initialState = {
  auth: {
    loading: false,
  },
};

describe('pages/SignIn test', () => {
  it('should render correctly', async () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb => cb(initialState));

    const { container } = render(<SignIn />);

    expect(container).toBeTruthy();
  });

  it('should dispatch a signin request when user fills and submits the form correctly', async () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb => cb(initialState));

    const { getByTestId } = render(<SignIn />);

    const values = {
      email: 'email@gmail.com',
      password: '123123',
    };

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.changeText(emailInput, values.email);
    fireEvent.changeText(passwordInput, values.password);
    fireEvent.press(submitButton);

    await wait();

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenLastCalledWith(
      AuthActions.postSigninRequest(values),
    );
  });

  it('should not submit the form when inputs a invalid e-mail', async () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb => cb(initialState));

    const toastSpy = jest.spyOn(Toast, 'show');

    const { getByTestId } = render(<SignIn />);

    const values = {
      email: 'invalidemail',
      password: '123123',
    };

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.changeText(emailInput, values.email);
    fireEvent.changeText(passwordInput, values.password);
    fireEvent.press(submitButton);

    await wait();

    expect(dispatch).not.toHaveBeenCalled();
    expect(toastSpy).toHaveBeenCalledWith('Informe um e-mail válido.', 2000);

    toastSpy.mockClear();
  });

  it('should not submit the form when inputs a password', async () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb => cb(initialState));

    const toastSpy = jest.spyOn(Toast, 'show');

    const { getByTestId } = render(<SignIn />);

    const values = {
      email: 'email@gmail.com',
      password: '1',
    };

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.changeText(emailInput, values.email);
    fireEvent.changeText(passwordInput, values.password);
    fireEvent.press(submitButton);

    await wait();

    expect(dispatch).not.toHaveBeenCalled();
    expect(toastSpy).toHaveBeenCalledWith(
      'A senha deve conter no mínimo 6 caracteres.',
      2000,
    );
  });

  it('should navigate to signup page when user clicks on link', async () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByTestId } = render(<SignIn navigation={navigation} />);

    const link = getByTestId('signup-link');

    fireEvent.press(link);

    expect(navigation.navigate).toHaveBeenCalledWith('SignUp');
  });
});
