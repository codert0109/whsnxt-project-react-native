import { identity } from "lodash";
import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Button } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function PaymentMethod({ navigation, route }) {

  onClickPaymentMethod = (id) => {
    navigation.navigate('PaymentLogin', { method: id, total: route.params?.total })
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
        <Text style={styles.Txt432}>Payment Method</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        <View style={{ backgroundColor: '#1455F5', height: 50, width: '100%', borderRadius: 10, marginVertical: 10 }} onTouchEnd={() => onClickPaymentMethod(0)}><Image source={require('./i_paypal.png')} style={{ alignSelf: 'center', marginTop: 10 }} /></View>
        <View style={{ backgroundColor: '#1455F5', height: 50, width: '100%', borderRadius: 10, marginVertical: 10 }} onTouchEnd={() => onClickPaymentMethod(1)}><Image source={require('./i_mastercard.png')} style={{ alignSelf: 'center', marginTop: 10 }} /></View>
        <View style={{ backgroundColor: '#1455F5', height: 50, width: '100%', borderRadius: 10, marginVertical: 10 }} onTouchEnd={() => onClickPaymentMethod(2)}><Image source={require('./i_visa.png')} style={{ alignSelf: 'center', marginTop: 10 }} /></View>
      </View>
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
