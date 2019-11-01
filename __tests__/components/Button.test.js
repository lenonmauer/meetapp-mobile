import React from 'react';
import { fireEvent, render, getNodeText } from '@testing-library/react-native';

import Button from '../../src/components/Button';

describe('components/Button test', () => {
  it('should call onPress prop when button is clicked', async () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <Button onPress={onPressMock}>A nice button</Button>,
    );

    const touchable = getByTestId('Button__touchable');

    fireEvent.press(touchable);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('should display a spinner when loading prop is true', async () => {
    const { queryByTestId } = render(
      <Button onPress={jest.fn()} loading>
        A nice button
      </Button>,
    );

    const label = queryByTestId('Button__label');
    const spinner = queryByTestId('Button__spinner');

    expect(spinner).toBeTruthy();
    expect(label).toBeFalsy();
  });

  it('should display a label when loading is false', async () => {
    const { queryByTestId } = render(
      <Button onPress={jest.fn()} loading={false}>
        A nice button
      </Button>,
    );

    const label = queryByTestId('Button__label');
    const spinner = queryByTestId('Button__spinner');

    expect(label).toBeTruthy();
    expect(spinner).toBeFalsy();
  });

  it('should use the children prop as label', async () => {
    const { getByTestId } = render(
      <Button onPress={jest.fn()}>A nice button</Button>,
    );

    const labelElement = getByTestId('Button__label');

    expect(getNodeText(labelElement)).toEqual('A nice button');
  });
});
