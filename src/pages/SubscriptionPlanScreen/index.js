import { identity } from "lodash";
import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Button } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function SubscriptionPlanScreen({ navigation, route }) {

  onClickSubscriptionScreen = (id) => {
    navigation.navigate('PaymentLogin', { method: id, total: route.params?.total })
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onTouchEnd={() => { navigation.goBack() }}
        />
        <Text style={styles.Txt432}>Subscription</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <View style={{ backgroundColor: 'white', marginTop: 0, width: '100%', borderRadius: 15, padding: 20 }} onTouchEnd={() => navigation.navigate('Subscription', { subscriptionPlan: 0 })}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontSize: 18 }}>BRONZE</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{">"}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
            <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold' }}>FREE</Text>
            <Text style={{ color: 'black', fontSize: 10, alignSelf: 'center' }}>Free</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', marginTop: 20, width: '100%', borderRadius: 15, padding: 20 }} onTouchEnd={() => navigation.navigate('Subscription', { subscriptionPlan: 1 })}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontSize: 18 }}>GOLD</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{">"}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
            <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold' }}>$99</Text>
            <Text style={{ color: 'black', fontSize: 10, alignSelf: 'center' }}>A WEEK</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', marginTop: 20, width: '100%', borderRadius: 15, padding: 20 }} onTouchEnd={() => navigation.navigate('Subscription', { subscriptionPlan: 2 })}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontSize: 18 }}>PLATINIUM</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{">"}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
            <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold' }}>$199</Text>
            <Text style={{ color: 'black', fontSize: 10, alignSelf: 'center' }}>A MONTH</Text>
          </View>
        </View>
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
