import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function onItemClick(event) {
  console.log('event', event);
  //
}
const Item = (data) => {
  const {address, image, price} = data;

  const {navigate} = useNavigation();
  return (
    <Pressable onPress={() => navigate('ListingPage', {data})}>
      <View style={styles.item} onPress={onItemClick}>
        <Image source={{uri: image}} style={styles.itemImage} />
        <View style={styles.itemInformation}>
          <Text style={styles.itemPrice}>£{price}</Text>
          <Text style={styles.itemAddress}>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const SearchResultsScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flastList}
        data={props.route.params.data}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flastList: {
    padding: 20,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: '#656565',
    borderBottomWidth: 2,
  },
  itemInformation: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  itemPrice: {
    color: '#48bbec',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 25,
  },
  itemAddress: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  itemImage: {
    width: 100,
    height: 75,
    marginVertical: 40,
    marginHorizontal: 40,
    paddingRight: 20,
    paddingVertical: 20,
  },
});
export default SearchResultsScreen;
