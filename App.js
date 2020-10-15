import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchResultsScreen from './src/screens/SearchResults';
import Listing from './src/screens/Listing';

import React from 'react';
const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{title: 'Property Finder'}}
          name="Search"
          component={SearchScreen}
        />
        <AppStack.Screen
          options={{title: 'Search Results'}}
          name="SearchResults"
          component={SearchResultsScreen}
        />
        <AppStack.Screen
          options={{title: 'Listing'}}
          name="ListingPage"
          component={Listing}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
