import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Button } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function ProductDetail({ navigation }) {
  const [amount, setAmount] = useState('01');

  onControlAmount = (d) => {
    if (d == -1) {
      let oldAmount = parseInt(amount, 10);
      let newAmount = oldAmount - 1;
      if (newAmount < 0) newAmount = 0;
      newAmount = newAmount < 10 ? '0' + newAmount : newAmount + '';
      setAmount(newAmount)
    } else {
      let oldAmount = parseInt(amount, 10);
      let newAmount = oldAmount + 1;
      if (newAmount < 0) newAmount = 0;
      newAmount = newAmount < 10 ? '0' + newAmount : newAmount + '';
      setAmount(newAmount)
    }
  }

  onClickAddToCart = () => {
    if (parseInt(amount, 10) > 0)
      navigation.navigate('CheckOut', { amount })
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onTouchEnd={() => { navigation.goBack() }}
        />
        <Text style={styles.Txt432}>Product Detail</Text>
      </View>
      <View><Image source={require('./detail1.png')} style={{ width: '70%', borderRadius: 10, alignSelf: 'center', marginTop: 20, aspectRatio: 1, height: 'auto' }}></Image></View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 100, marginTop: 20 }}>
        <Image source={require('./detail2.png')} />
        <Image source={require('./detail3.png')} />
        <Image source={require('./detail4.png')} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}><Image source={require('./detail5.png')} /><Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: '800' }}>Song 1</Text></View>
        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}><Image source={require('./detail5.png')} /><Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: '800' }}>Song 2</Text></View>
        <Text style={{ color: 'white', position: 'absolute', right: 10 }}>$300</Text>
      </View>
      <View style={{ backgroundColor: '#1455F5', display: 'flex', flexDirection: 'row', marginTop: 20, width: '20%', borderBottomLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'space-evenly', paddingVertical: 5 }}>
        <Image source={require('./i_minus.png')} onTouchEnd={() => onControlAmount(-1)} />
        <Text style={{ color: 'white' }}>{amount}</Text>
        <Image source={require('./i_plus.png')} onTouchEnd={() => onControlAmount(1)} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Product Info</Text>
        <Text style={{ color: 'white', fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque enim eleifend habitasse adipiscing velit tellus tempor maecenas. Sit in hendrerit amet, nunc tempor nisi. Mauris sed sit amet placerat faucibus at.</Text>
      </View>
      <View style={{ width: '50%', backgroundColor: "#1455F5", padding: 10, borderRadius: 20, alignSelf: 'center', marginTop: 30 }} onTouchEnd={() => onClickAddToCart()}><Text style={{ color: 'white', alignSelf: 'center' }}>Add to cart</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  PrivacyPolicy: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "rgba(0,0,0,1)",
    width: width,
    height: height,
  },
  Group642: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
  },
  Group379: {
    position: 'absolute',
    left: 0,
    width: 33.57,
    height: 33.57,
    zIndex: 1,
  },
  Txt432: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "600",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
  },
})
