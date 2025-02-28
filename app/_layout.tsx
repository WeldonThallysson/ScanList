import React from 'react';
import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';
import { View, Text } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <Toast />
    </View>
  );
}
