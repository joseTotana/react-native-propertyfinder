import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Listing = (props) => {
  const {address, image, price, description} = props.route.params.data;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.price}>£{price}</Text>
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.address}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 10,
  },
  imageWrapper: {backgroundColor: '#DEDEDE', padding: 10},
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: '#48bbec',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 25,
  },
  address: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  bottomText: {paddingHorizontal: 5},
});
export default Listing;
