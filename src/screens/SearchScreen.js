import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import NotificationManager from '../services/NotificationManager';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('london');
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function onSearchTermChange(event) {
    // console.log(`Current: ${searchTerm}, Next: ${event.nativeEvent.text}`);
    setSearchTerm(event.nativeEvent.text);
  }

  const {navigate} = useNavigation();
  function getProperties() {
    setIsLoading(true);
    fetch(
      `https://5f843a3c6b97440016f4f2dc.mockapi.io/properties?search=${searchTerm}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        navigate('SearchResults', {data});
      });
  }

  function triggerNotificaction() {
    NotificationManager.scheduleNotification({
      title: 'Notifcaction title',
      message: 'Notif message',
      date: new Date(Date.now() + 5 * 1000),
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>Search for houses to buy!</Text>
      <Text style={styles.description}>Search by place-name or postcode</Text>
      <View style={styles.flowRight}>
        {isLoading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <>
            <TextInput
              style={styles.searchInput}
              placeholder={'Search via name or postcode'}
              underlineColorAndroid={'transparent'}
              onChange={onSearchTermChange}
              returnKeyType="search"
              onSubmitEditing={getProperties}
              placeholder={searchTerm}
            />
            <Button
              onPress={getProperties}
              title={'Go'}
              style={styles.button}
            />
          </>
        )}
      </View>
      <Button title={'Send Notif'} onPress={triggerNotificaction} />
      <Image
        source={require('../assets/images/house.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 40,
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    borderRadius: 8,
    color: '#48bbec',
    flexShrink: 1,
  },
  image: {
    width: 217,
    height: 138,
  },
});

export default SearchScreen;
