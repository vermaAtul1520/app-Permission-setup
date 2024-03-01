import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from 'react';
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
import AppNavigation from './navigation/AppNavigation';
import HomeScreen from './screens/HomeScreen';
import GlobalContextProvider from './context/GlobalContext';

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
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <GlobalContextProvider>
        {/* <AppNavigation/> */}
        <HomeScreen />
      </GlobalContextProvider>
    </SafeAreaView>
  );
}

export default App;
