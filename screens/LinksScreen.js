import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Button,
  Text,
  Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
//import console = require('console');

export default class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
    //var params = props.navigation.state.params.favoritesArray;
  }
  render() {
    console.log(this.state)
    const {navigation} = this.props;
    console.log(navigation.getParam('Links'))
    // console.log('1 '+this.state.value)
    // console.log('2 '+ this.state.params)
    // console.log('3 '+ params)
    //console.log('1')
    //console.log(JSON.stringify(navigation.getParam('favoritesArray')))
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <ExpoLinksView />
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>
            URL: {JSON.stringify(navigation.getParam('favoritesArray','no favorites'))}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
