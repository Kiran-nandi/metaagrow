import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions,
    ActivityIndicator
  } from 'react-native';

import sample from './assets/images/sample.jpg';
import Welcome from "./Welcome";
import axios from 'axios';

  const SplashScreen = () => {
    const [showsplash, setshowsplash] = useState(true);
    const [showindicator, setshowindicator] = useState(true);
    const [splashdata, setsplashdata] = useState([]);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const fetchsplashimage = async() => {
        console.log('hit >>')
        let response = await axios.get('https://upskillscert.com/metaagrow/splashscreen').then((resp) => {
            console.log('resp >>', resp.data.data)
            setsplashdata(resp.data.data)
            setshowindicator(false);
            setTimeout(() => {
                setshowsplash(false)
             }, 5000);
        }).catch((err) => {
            console.log('fetchsplashimage resp >>', err)
        })
    }

    useEffect(() => {
        fetchsplashimage();
    }, [])

    return (
        <>
            {
                showsplash ?
                showindicator ?
                <View style={{height: windowHeight, justifyContent: 'center'}}>
                    {/* <Text style={{fontSize:18, color: '#fff', textAlign: 'center'}}>Welcome Metaagrow!!</Text> */}
                    <ActivityIndicator color={'#ff0000'} size={40} />
                </View>
                :
                <View style={{flex: 1}}>
                    <Image source={{uri: splashdata?.image}} style={{resizeMode: 'cover', width: windowWidth, height: windowHeight}}  />
                </View> 
                : 
                <View style={{height: windowHeight, justifyContent: 'center'}}>
                    <Text style={{fontSize:18, color: '#fff', textAlign: 'center'}}>Welcome Metaagrow!!</Text>
                </View>
            }
        </>
    
       
    )
  }

  export default SplashScreen;