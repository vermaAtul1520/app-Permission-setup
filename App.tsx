/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';

import React, { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  AppState,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // useEffect(() => {
  //   const fnc = async () => {
  //     const permissions = await
  //       check(PERMISSIONS.IOS.LOCATION_ALWAYS)
  //         .then((result) => {
  //           switch (result) {
  //             case RESULTS.UNAVAILABLE:
  //               console.log('This feature is not available (on this device / in this context)');
  //               break;
  //             case RESULTS.DENIED:
  //               console.log('The permission has not been requested / is denied but requestable');
  //               break;
  //             case RESULTS.LIMITED:
  //               console.log('The permission is limited: some actions are possible');
  //               break;
  //             case RESULTS.GRANTED:
  //               console.log('The permission is granted');
  //               break;
  //             case RESULTS.BLOCKED:
  //               console.log('The permission is denied and not requestable anymore');
  //               break;
  //           }
  //         })
  //         .catch((error) => {
  //           // …
  //           console.log("getting error in checking status,.,....")
  //         });

  //     // if (permissions) {
  //     request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
  //       console.log("sdfghjkl;'", result)
  //     });
  //     //}
  //   }

  //   fnc();
  // }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <NavigationContainer
        // linking={linking}
        theme={{
          colors: {
            background: '#fff',
            primary: '#fff',
            card: '#fff',
            text: '#000',
            border: '#fff',
            notification: '#fff',
          },
          dark: true,
        }}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          {/* <Text style={{ backgroundColor: 'red' }}>
            "Its testing"
          </Text> */}
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
