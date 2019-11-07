import React from 'react';
import { fireEvent, render, getNodeText } from '@testing-library/react-native';

import DateSwitch from '~/components/DateSwitch';

describe('components/DateSwitch test', () => {
  it('should display the date in dd/mm/yyyy format', async () => {
    const date = Date.UTC(2019, 5, 5, 12);

    const { getByTestId } = render(<DateSwitch date={date} />);

    const dateLabel = getByTestId('date-label');

    expect(getNodeText(dateLabel)).toEqual('05 de junho');
  });

  it('should call onDateChange with date minus 1 day when user clicks in left arrow', async () => {
    const onDateChange = jest.fn();
    const date = Date.UTC(2019, 1, 5);
    const expectedDate = new Date(Date.UTC(2019, 1, 4));

    const { getByTestId } = render(
      <DateSwitch date={date} onDateChange={onDateChange} />,
    );

    const leftArrow = getByTestId('left-arrow');

    fireEvent.press(leftArrow);

    expect(onDateChange).toHaveBeenCalledWith(expectedDate);
  });

  it('should call onDateChange with date plus 1 day when user clicks in right arrow', async () => {
    const onDateChange = jest.fn();
    const date = Date.UTC(2019, 1, 5);
    const expectedDate = new Date(Date.UTC(2019, 1, 6));

    const { getByTestId } = render(
      <DateSwitch date={date} onDateChange={onDateChange} />,
    );

    const leftArrow = getByTestId('right-arrow');

    fireEvent.press(leftArrow);

    expect(onDateChange).toHaveBeenCalledWith(expectedDate);
  });
});
