import { View, Text } from 'react-native'
import React from 'react'
import '../global.css'
import { Stack } from 'expo-router'


const _layout = () => {
  return (
   <Stack>
    <Stack.Screen name="HomeScreen" options={{headerShown:false}} />
    <Stack.Screen name="(screens)" options={{headerShown:false}} />
   </Stack>
  )
}

export default _layout