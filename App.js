import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native'

import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Header />
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
});
