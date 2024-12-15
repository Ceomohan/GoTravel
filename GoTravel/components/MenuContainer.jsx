import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


const MenuContainer = ({ title, imageSrc, type, setType ,isSelected}) => {
  return (
    <TouchableOpacity
      onPress={() => setType(title.toLowerCase())}
      style={styles.container}>
      <View style={[styles.imageContainer, isSelected && styles.selected]}>
        <Image
          source={imageSrc}
          style={styles.image}
          resizeMode="contain"

        />
      </View>
      <Text className="text-2xl font-bold text-[#00BCC9]">{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  imageContainer: {
    width: 72,  // Equivalent to w-24
    height: 72,  // Equivalent to h-24
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 48,  // Rounded full
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    backgroundColor: 'transparent',
  },
  
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,  // Equivalent to text-xl
    fontWeight: '600',  // Equivalent to font-semibold
    color: '#4B5563',  // Equivalent to text-secondary; replace with desired color
    marginTop: 4,
  },
});

export default MenuContainer