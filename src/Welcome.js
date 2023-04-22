import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions
  } from 'react-native';

import sample from './assets/images/sample.jpg';

  const Welcome = () => {

    return (
       <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{backgroundColor: 'red'}}>Welcome Metagroww!!</Text>
       </View>
    )
  }

  export default Welcome;