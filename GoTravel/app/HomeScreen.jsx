import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeroImage, Luffy, Luffy2 } from '../assets/index'
import * as Animatable from "react-native-animatable"
import { useNavigation } from 'expo-router'

const HomeScreen = () => {

    const navigator = useNavigation()

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/*First Script */}
            <View className="px-5 mt-16 flex-row items-center  space-x-8 gap-2">
                <View className="bg-black w-16 h-16 rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl ">Go</Text>
                </View>
                <Text className="text-[#2A2B4A] font-bold text-2xl">
                    Travel
                </Text>
            </View>
            {/*Second section */}
            <View className="px-6 mt-12 space-y-4">
                <Text className="text-[42px] text-[#3C6072]">Enjoy The Trip With</Text>
                <Text className="text-[32px] text-[#00BCC9] font-bold ">Good Memories</Text>

                <Text className="text-[12px] text-[#00BCC9] mt-3 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem amet ad nulla, officia esse.
                </Text>
            </View>

            {/*circle section */}
            <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>

            <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute bottom-16 -left-36"></View>

            {/*Image section */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={Luffy2}
                    className="w-[200px] h-[200px] object-cover"
                />
                <TouchableOpacity 
                onPress={()=>navigator.navigate("(screens)")}
                className="absolute bottom-20 border-l-2 border-r-2 border-t-4 rounded-full border-[#f37c41] items-center justify-center">

                    <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="bg-[#00BCC9] items-center justify-center w-20 h-20 rounded-full ">
                        <Text className="text-gray-200 font-semibold text-[36px]">Go</Text>
                    </Animatable.View>

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen