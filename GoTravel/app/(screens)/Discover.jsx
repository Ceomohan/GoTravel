import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import {FontAwesome} from "@expo/vector-icons"
import React, { useState } from 'react'
import MenuContainer from '../../components/MenuContainer';
import { attraction, hotel, restaurant } from '../../assets';


const Discover = () => {
 
  const [type,setType] = useState("restaurants")

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-14">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[32px] text-[#0c0d0cdc]  font-bold">Discover</Text>
          <Text className="text-[24px] text-[#701eb8a4] font-semibold">The Beauty Today</Text>
        </View>
        <View className="w-16 h-16 bg-gray-400 rounded-md justify-center items-center">

        </View>
      </View>

      {/* google search places */}
      <View className="flex-row items-center bg-white shadow-lg mx-4 rounded-xl py-1 px-4 mt-3 ">
        <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields:"geometry"}}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View>
      <ScrollView >
          <View className="flex-row items-center justify-between mt-8 px-4" >
            <MenuContainer 
            key="reastaurants"
            title="Reastaurants"
            type={type}
            isSelected={type}
            setType={setType}
            imageSrc={restaurant}
            />
            <MenuContainer 
            key="hotels"
            title="Hotels"
            type={type}
            isSelected={type}
            setType={setType}
            imageSrc={hotel}
            />
             <MenuContainer 
            key="attractions"
            title="Attractions"
            type={type}
            isSelected={type}
            setType={setType}
            imageSrc={attraction}
            />
          </View>

          {/* This is for menu card top text section */}
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-4">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Discover