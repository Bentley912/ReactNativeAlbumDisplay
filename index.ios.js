//Place code in here for IOS//


//Import Library to help build component//
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create component //
const App = () => (
  <View style={{ flex: 1 }}> 
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
   
  );

 
AppRegistry.registerComponent('albums', () => App);
