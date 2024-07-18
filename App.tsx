/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/HomeScreen';
import SurfingScreen from './src/SurfingScreen';

const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }



function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = require('./assets/tab_home.png');
              } else if (route.name === 'Surfing') {
                iconName = require('./assets/tab_surfing.png');
              } else if (route.name === 'Moula') {
                iconName = require('./assets/tab_mula.png');
              } else if (route.name === 'Vulcano') {
                iconName = require('./assets/tab_vulcano.png');
              }

              return (
                <Image
                  source={iconName}
                  style={[styles.icon, { tintColor: focused ? '#008080' : 'gray' }]}
                />
              );
            },
            tabBarActiveTintColor: '#008080',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
              fontSize: 10,
              fontFamily: 'IBMPlexMono-Regular', // Apply custom font
            },
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopWidth: 0,
            },
            tabBarItemStyle: {
              position: 'relative',
            },
            tabBarIconStyle: {
              marginBottom: -5,
            },
            tabBarLabel: ({ focused, color }) => (
              <View style={styles.labelContainer}>
                <Text style={{ color: focused ? '#008080' : 'gray', fontSize: 10, fontFamily: 'IBMPlexMono-Regular' }}>
                  {route.name}
                </Text>
                {focused && <View style={styles.indicator} />}
              </View>
            ),
            tabBarShowLabel: true, // This property controls whether the labels are shown or not
          headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Surfing" component={SurfingScreen} />
          <Tab.Screen name="Moula" component={ProfileScreen} />
          <Tab.Screen name="Vulcano" component={NotificationsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color to white for all screens
  },
  icon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    resizeMode: 'contain', // Ensure the icon retains its aspect ratio
  },
  labelContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 20, // Ensure enough height to show the indicator below the label
  },
  indicator: {
    height: 3,
    width: '100%',
    backgroundColor: '#008080', // Ensure the color matches the selected color
    position: 'absolute',
    bottom: 0, // Adjust the position to ensure the indicator is visible
  },
});

export default App;
