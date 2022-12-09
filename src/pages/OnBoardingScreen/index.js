import React, { useEffect } from "react"
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get('screen');

export default function LogIn({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth')
    }, 500)
  })

  return (
    <View style={styles.LogIn} onStartShouldSetResponder={() => { navigation.navigate('Auth') }}>
      <Image style={styles.Unsplash2egnqazbamk}
        source={require('./Group_48095699.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  LogIn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)",
    width: width,
    height: height,
  },
  Unsplash2egnqazbamk: {
    width: width,
    height: 465 / 365 * width
  },
})