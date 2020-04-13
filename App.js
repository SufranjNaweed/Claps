/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Sandbox from './src/Components/Sandbox';
import BottomNavigation from './src/Navigation/BottomNavigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Sandbox /> */}
      <SafeAreaView style={{flex: 1}}>
        <BottomNavigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
