import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, ScrollView } from "react-native"


const { width, height } = Dimensions.get('screen');

export default function Store({ navigation }) {
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);

  onToggleFilterMenu = () => {
    setFilterMenuVisible(!filterMenuVisible);
  }
  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={(e) => { { navigation.goBack(); } }}
        />
        <Text style={styles.Txt432}>Product</Text>
        <Image
          style={styles.Group380}
          source={require('./i_store.png')}
          onTouchEnd={(e) => { { e.stopPropagation(); navigation.navigate('Store') } }}
        />

      </View>
      <View style={{ width: '100%', paddingVertical: 20, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder="Search..." placeholderTextColor={'grey'} style={{ backgroundColor: 'white', width: '80%', borderRadius: 5, marginRight: 10, paddingLeft: 40, color: 'black' }} autoFocus={false}></TextInput>
        <Image source={require('./i_search.png')} style={{ position: 'absolute', left: 30, marginRight: 10, paddingRight: 10 }} />
        <Image source={require('./i_filter.png')} style={{ height: 40 }} onTouchEnd={() => onToggleFilterMenu()} />
      </View>
      {filterMenuVisible ? (
        <View style={{ backgroundColor: 'white', width: '20%', display: 'flex', flexDirection: 'column', position: 'absolute', right: 40, top: 130, alignItems: 'center', justifyContent: 'center', borderRadius: 10, zIndex: 1 }}>
          <View style={{ height: 40, borderBottomWidth: 1, width: '100%' }}><Text style={{ marginTop: 10, fontSize: 12, alignSelf: 'center' }}>Type</Text></View>
          <View style={{ height: 40, borderBottomWidth: 1, width: '100%' }}><Text style={{ marginTop: 10, fontSize: 12, alignSelf: 'center' }}>Category</Text></View>
          <View style={{ height: 40, borderBottomWidth: 1, width: '100%' }}><Text style={{ marginTop: 10, fontSize: 12, alignSelf: 'center' }}>Name</Text></View>
        </View>
      ) : null}
      <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store1.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_white.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store2.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_red.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store3.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_white.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store3.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_white.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store4.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_white.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store5.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_white.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store1.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_white.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
          <View style={{ width: '40%', backgroundColor: 'white', borderRadius: 10, marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }} onTouchEnd={() => navigation.navigate('ProductDetail')}>
            <Image source={require('./store2.png')} style={{ width: '90%', aspectRatio: 1, height: 'auto' }} />
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>$300 {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Mac Miller</Text>
            <Text style={{ fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 5 }}>Painting for the future</Text>
            <Image source={require('./i_heart_red.png')} style={{ position: 'absolute', right: 5, bottom: 20 }} />
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', position: 'absolute', height: width / 5, width: width, backgroundColor: 'white', opacity: .9, bottom: 0, alignItems: 'center', justifyContent: "space-around", paddingBottom: 20 }}>
        <Image source={require('../HomeScreen/i_navbar1.png')} onTouchEnd={() => navigation.navigate('Home')} />
        <View onTouchEnd={() => navigation.navigate('Chatlist')}><Image source={require('../HomeScreen/i_navbar2.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <View onTouchEnd={() => navigation.navigate('Notification')}><Image source={require('../HomeScreen/i_navbar3.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <Image source={require('../HomeScreen/i_navbar4.png')} onTouchEnd={() => navigation.navigate('EditProfile')} />
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
  Group380: {
    position: 'absolute',
    right: 0,
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
  iconNumber: {
    backgroundColor: 'red',
    width: 16, height: 16,
    borderRadius: 8,
    position: 'absolute',
    top: -5,
    right: 0,
    textAlign: 'center',
    paddingLeft: 3,
    paddingTop: 1
  },
})
