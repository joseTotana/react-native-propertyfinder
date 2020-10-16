import SearchScreen from './SearchScreen';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigation,
  }),
}));

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve([]),
  });
});

describe('SearchScreen', () => {
  it('should be true', () => {
    const wrapper = render(<SearchScreen />);
    const {getByText, getByTestID} = wrapper;
    const mainText = getByText('Search for houses to buy!');

    expect(mainText).toBeDefined();
    expect(true).toBeTruthy();
  });

  it('should fire an api request when pressing the search button', () => {
    const {getByTestId} = render(<SearchScreen />);
    const searchButton = getByTestId('searchButton');
    const textInput = getByTestId('textInput');
    const searchTerm = 'Dublin';
    const event = {nativeEvent: {text: searchTerm}};
    const url = `https://5f843a3c6b97440016f4f2dc.mockapi.io/properties?search=${searchTerm}`;
    fireEvent(textInput, 'onChange', event);
    fireEvent(searchButton, 'onPress');
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(url);
  });
});
