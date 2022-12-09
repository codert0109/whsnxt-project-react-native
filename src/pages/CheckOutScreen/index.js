import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Button } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function CheckOutScreen({ navigation, route }) {
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setAmount(route.params?.amount);
  }, []);

  onControlAmount = (d) => {
    if (d == -1) {
      let newAmount = amount - 1;
      if (newAmount < 0) newAmount = 0;
      setAmount(newAmount);
    } else {
      setAmount(amount + 1);
    }
  }

  onClickPay = () => {
    navigation.navigate('PaymentMethod', { total: amount * 300 });
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={() => { navigation.goBack() }}
        />
        <Text style={styles.Txt432}>CheckOut</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50, paddingHorizontal: 10, width: '100%' }}>
        <Image source={require('../ProductDetailScreen/detail1.png')} style={{ width: 80, height: 80 }} />
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }} >
          <Text style={{ color: 'white', fontSize: 12, marginLeft: 20 }}>Album</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Text style={{ color: '#1455F5', fontSize: 12, marginLeft: 20 }}>$270.2</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', right: 0, bottom: 0 }}>
          <Image source={require('./i_minus.png')} onTouchEnd={() => onControlAmount(-1)} />
          <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', marginHorizontal: 10 }}>Qty :{" "} {amount}</Text>
          <Image source={require('./i_plus.png')} onTouchEnd={() => onControlAmount(1)} /></View>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '100%', marginTop: 20 }} />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Track list</Text>
        <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>{amount} items(s), Total: <Text style={{ color: '#1455F5' }}>${amount * 300}</Text></Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('./detail5.png')} />
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', marginLeft: 10 }}>Song 1</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('./detail5.png')} />
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', marginLeft: 10 }}>Song 2</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('./detail5.png')} />
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', marginLeft: 10 }}>Song 3</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('./detail5.png')} />
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', marginLeft: 10 }}>Song 4</Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Subtotal(1 item)</Text>
        <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>${300}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Total :{" "}<Text style={{ color: '#1455F5' }}>${amount * 300}</Text></Text>
      </View>
      <View style={{ width: '50%', backgroundColor: "#1455F5", padding: 10, borderRadius: 20, alignSelf: 'center', marginTop: 100 }} onTouchEnd={() => onClickPay()}><Text style={{ color: 'white', alignSelf: 'center' }}>Pay</Text></View>
    </View >
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
    color: 'white'
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
