import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('screen');

export default function Home({ navigation, route }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);
  const [postMenuVisibles, setPostMenuvisibles] = useState([false, false]);
  const [uploadProgress, setUploadProgress] = useState(0.0);
  const [uploadIndeterminate, setUploadIndeterminate] = useState(true);
  const [uploadVisible, setUploadVisible] = useState(false);

  onClickMore = () => {

  }

  useEffect(() => {
    if (route.params?.createPost) {
      animate();
    }
  }, [route]);

  animate = () => {
    setUploadVisible(true);
    let progress = 0;
    setUploadProgress(progress);
    setTimeout(() => {
      setUploadIndeterminate(false);
      let timer = setInterval(() => {
        progress += Math.random() / 5.0;
        if (progress > 1) {
          progress = 1;
          setUploadVisible(false);
          clearInterval(timer);
        }
        setUploadProgress(progress);
      }, 500);
    }, 0);
  }

  onToggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  onToggleBottomMenu = () => {
    setBottomMenuVisible(!bottomMenuVisible);
  }

  onTogglePostMenu = (id = 0) => {
    let oldPostMenuVisibles = postMenuVisibles.concat();
    oldPostMenuVisibles[id] = !oldPostMenuVisibles[id];
    setPostMenuvisibles(oldPostMenuVisibles);
  }

  return (
    <>
      {
        menuVisible ? (
          <View style={styles.HomeMenu}>
            <View style={{ alignSelf: 'flex-start', marginLeft: 20 }} onStartShouldSetResponder={() => onToggleMenu()}><Image source={require('./i_close_black.png')} /></View>
            <Pressable onPress={() => navigation.navigate('EditProfile', { accountType: route.params?.accountType })}><Text style={styles.fontMenu}>Edit Profile</Text></Pressable>
            {route.params?.accountType == 'user' &&
              <Pressable onPress={() => navigation.navigate('EventCalendar')}><Text style={styles.fontMenu}>Calendar</Text></Pressable>
            }
            {route.params?.accountType == 'talent' &&
              <Pressable onPress={() => navigation.navigate('EventCalendar')}><Text style={styles.fontMenu}>Calendar</Text></Pressable>
            }
            <Pressable onPress={() => navigation.navigate('Store')}><Text style={styles.fontMenu}>Store</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('PurchasedItems')}><Text style={styles.fontMenu}>Purchased Items</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('TermsOfUse')}><Text style={styles.fontMenu}>Terms and Conditions</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('PrivacyPolicy')}><Text style={styles.fontMenu} >Privacy Policy</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Setting', { accountType: route.params?.accountType })}><Text style={styles.fontMenu} >Setting</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Auth')}><Text style={styles.fontMenu}>Logout</Text></Pressable>
          </View>) : (
          <View style={{ ...styles.Home, opacity: uploadVisible ? 0.3 : 1 }} >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image
                style={styles.CarbonOverflowMenuVertical1}
                source={require('./MenuIcon.png')}
                onStartShouldSetResponder={() => onToggleMenu()}
              />
              <Image
                style={styles.CarbonOverflowMenuVertica}
                source={require('./AppIcon.png')}
              />
              <Image
                style={styles.CarbonOverflowMenuVertical2}
                source={require('./SearchIcon.png')}
                onTouchEnd={() => navigation.navigate('UserSearch')}
              />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.Txt840}>Hot5</Text>
              <Image source={require('./emojione_fire.png')} style={styles.emojione_fire}></Image>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} onTouchEnd={() => navigation.navigate('Hot5')}>
              <Image source={require('./hotImage1.png')} style={styles.hotImage}></Image>
              <Image source={require('./hotImage2.png')} style={styles.hotImage}></Image>
              <Image source={require('./hotImage3.png')} style={styles.hotImage}></Image>
              <Image source={require('./hotImage4.png')} style={styles.hotImage}></Image>
              <Image source={require('./hotImgae5.png')} style={styles.hotImage}></Image>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
              <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                  <Image source={require('./featured_talent1.png')}></Image>
                  <View style={{ ...styles.columnStyle, marginLeft: 20 }}>
                    <Text style={{ color: 'white' }}>Featured_Talent(Rock Music)</Text>
                    <Text style={styles.Txt9010}>2 minutes ago</Text>
                  </View>
                  <Image source={require('./i_three_dot.png')} style={{ position: 'absolute', right: 10 }} onStartShouldSetResponder={() => onTogglePostMenu(0)} />
                </View>
                <View>
                  {postMenuVisibles[0] ? (
                    <View style={{ ...styles.columnStyle, position: 'absolute', top: 0, backgroundColor: 'white', zIndex: 1, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 40 }} onTouchEnd={() => onTogglePostMenu()}>
                      <View style={{ ...styles.rowStyle, padding: 5 }}><Image source={require('./i_eyehide.png')} style={{ alignSelf: 'center' }} /><View style={{ ...styles.columnStyle, marginLeft: 20 }}><Text>Hide Post</Text><Text style={{ fontSize: 10 }}>See fewer posts like this.</Text></View></View>
                      <View style={{ ...styles.rowStyle, padding: 5 }}><Image source={require('./i_warning.png')} style={{ alignSelf: 'center' }} /><View style={{ ...styles.columnStyle, marginLeft: 20 }}><Text>Report this post</Text><Text style={{ fontSize: 10 }}>Tell us a problem with this post.</Text></View></View>
                      <View style={{ ...styles.rowStyle, padding: 5 }}><Image source={require('./i_minus.png')} style={{ alignSelf: 'center' }} /><View style={{ ...styles.columnStyle, marginLeft: 20 }}><Text>Block</Text><Text style={{ fontSize: 10 }}>Block this user.</Text></View></View>
                      <View style={{ ...styles.rowStyle, padding: 5 }}><Image source={require('./i_user_delete.png')} style={{ alignSelf: 'center' }} /><View style={{ ...styles.columnStyle, marginLeft: 20 }}><Text>Unfollow</Text><Text style={{ fontSize: 10 }}>Stop seeing post from the user.</Text></View></View>
                    </View>) : null}
                  <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien
                    luctus amet nunc. Luctus aliquet nulla tellus ut dui tortor,
                    elementum, natoquesodales. Pulvinar orci, scelerisque sit suscipit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien
                    luctus amet nunc. Luctus aliquet nulla tellus ut dui tortor,
                    elementum, natoquesodales. Pulvinar orci, scelerisque sit suscipit.
                    Amet, sapien luctus amet nunc. Luctus aliquet nulla tellus ut dui
                    tortor, elementum, natoquesodales. Pulvinar orci, scelerisque sit
                    suscipit. tellus ut dui tortor suscipit
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien
                    luctus amet nunc. Luctus aliquet nulla tellus ut dui tortor,
                    elementum, natoquesodales. Pulvinar orci, scelerisque sit suscipit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien
                    luctus amet nunc. Luctus aliquet nulla tellus ut dui tortor,
                    elementum, natoquesodales. Pulvinar orci, scelerisque sit suscipit.
                    Amet, sapien luctus amet nunc. Luctus aliquet nulla tellus ut dui
                    tortor, elementum, natoquesodales. Pulvinar orci, scelerisque sit
                    suscipit. tellus ut dui tortor suscipit
                    {/* <Text style={{ color: 'grey' }} onPressIn={() => onClickMore()}>...more</Text> */}
                  </Text>
                </View >
                <View style={{ ...styles.rowStyle, alignItems: 'center', justifyContent: 'space-between', padding: 10, marginTop: 5 }}>
                  <View><Image source={require('./i_heart_white.png')} style={styles.footerIcon} /><Text style={styles.fontWhite}>1.1k</Text></View>
                  <View><Image source={require('./i_message_white.png')} style={styles.footerIcon} /><Text style={styles.fontWhite}>527</Text></View>
                  <View><Image source={require('./i_bookmark_white.png')} style={{ ...styles.footerIcon, width: 40 }} /><Text style={styles.fontBlack}>527</Text></View>
                </View>
              </View >
              <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                  <Image source={require('./featured_talent2.png')}></Image>
                  <View style={{ ...styles.columnStyle, marginLeft: 20 }}>
                    <Text style={{ color: 'white' }}>Featured_Talent(Rock Music)</Text>
                    <Text style={styles.Txt9010}>Based on your preferences here’s an artist you may like</Text>
                  </View>
                  <Image source={require('./i_three_dot.png')} style={{ position: 'absolute', right: 10 }} />
                </View>
                <Image source={require('./featured_talent2_1.png')} style={{ width: '100%', borderRadius: 10, marginTop: 10 }}></Image>
                <View style={{ ...styles.rowStyle, alignItems: 'center', justifyContent: 'space-between', padding: 10, marginTop: 5 }}>
                  <View><Image source={require('./i_heart_white.png')} style={styles.footerIcon} /><Text style={styles.fontWhite}>1.1k</Text></View>
                  <View><Image source={require('./i_message_white.png')} style={styles.footerIcon} /><Text style={styles.fontWhite}>527</Text></View>
                  <View><Image source={require('./i_bookmark_white.png')} style={{ ...styles.footerIcon, width: 40 }} /><Text style={styles.fontBlack}>527</Text></View>
                </View>
              </View>
            </ScrollView >
            <View style={{ ...styles.rowStyle, position: 'absolute', height: width / 5, width: width, backgroundColor: 'white', opacity: .9, bottom: 0, alignItems: 'center', justifyContent: "space-around", paddingBottom: 20 }}>
              <Image source={require('../HomeScreen/i_navbar1.png')} />
              <View onTouchEnd={() => navigation.navigate('Chatlist')}><Image source={require('../HomeScreen/i_navbar2.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
              <View onTouchEnd={() => navigation.navigate('Notification')}><Image source={require('../HomeScreen/i_navbar3.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
              <Image source={require('../HomeScreen/i_navbar4.png')} onTouchEnd={() => navigation.navigate('EditProfile')} />
            </View>
            {
              bottomMenuVisible ? (
                <View style={styles.bottomMenu}>
                  <View style={{ backgroundColor: '#2f2f2f', height: 80, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 30 }}>Whats on Your Mind</Text>
                    <Image source={require('./i_close_white.png')} style={{ position: 'absolute', right: 20, top: 20 }} onStartShouldSetResponder={() => onToggleBottomMenu()} />
                  </View>
                  <View style={{ ...styles.bottomMenuItem }}>
                    <View style={{
                      ...styles.rowStyle, borderBottomColor: 'black',
                      borderBottomWidth: 1, width: '100%', paddingBottom: 10, alignItems: 'center'
                    }} onTouchEnd={() => { setBottomMenuVisible(false); navigation.navigate('CreatePost'); }}>
                      <Image source={require('./i_note.png')} /><Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 30 }}>Write</Text>
                    </View>
                  </View>
                  <View style={{ ...styles.bottomMenuItem }}>
                    <View style={{
                      ...styles.rowStyle, borderBottomColor: 'black',
                      borderBottomWidth: 1, width: '100%', paddingBottom: 10, alignItems: 'center'
                    }}>
                      <Image source={require('./i_camera.png')} /><Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 30 }}>Photo/Video</Text>
                    </View>
                  </View>
                  <View style={{ ...styles.bottomMenuItem }} onTouchEnd={() => navigation.navigate('LiveVideo')}>
                    <View style={{
                      ...styles.rowStyle, borderBottomColor: 'black',
                      borderBottomWidth: 1, width: '100%', paddingBottom: 10, alignItems: 'center'
                    }}>
                      <Image source={require('./i_wifi.png')} /><Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 30 }}>Live Video</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.bottomPlusIcon} onStartShouldSetResponder={() => onToggleBottomMenu()}>
                  <Image source={require('./i_plus_white.png')} />
                </View>
              )
            }
          </View >)
      }
      {
        uploadVisible ? (
          <Progress.Circle
            style={{ margin: 10, zIndex: 1, position: 'absolute', top: height / 2, left: width / 2.2, zIndex: 1 }}
            progress={uploadProgress}
            indeterminate={uploadIndeterminate}
          ><Text style={{ color: 'black', marginLeft: 10 }}>{Math.round(uploadProgress.toFixed(2) * 100)}%</Text></Progress.Circle>
        ) : null
      }
    </>
  )
}

const styles = StyleSheet.create({
  Home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    padding: 10,
    width: width,
    height: height,
  },
  HomeMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width,
    height: height,
    paddingTop: width / 3.5,
  },
  Group496: {
    position: "absolute",
    bottom: 40,
    borderRadius: 20,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tkx4f9zuvda-2343%3A3994?alt=media&token=0d34018b-0de5-46a0-8c80-063f340dad0d) */
    width: width / 1.1,
  },
  Vector: {
    position: "absolute",
    bottom: 150,
    right: 50,
    width: 21.74,
    height: 21.86,
    backgroundColor: 'blue',
    zIndex: 3,
  },
  Group499: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    width: 106,
    height: 16,
  },
  Group362: {
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 2,
    borderRadius: 8,
    left: width / 3,
    backgroundColor: "rgba(255,0,0,1)",
    width: 16,
    height: 16,
  },
  Txt594: {
    fontSize: 7.06,
    fontFamily: "",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  Group163: {
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 2,
    borderRadius: 8,
    left: width / 1.85,
    backgroundColor: "rgba(255,0,0,1)",
    width: 16,
    height: 16,
  },
  Txt594: {
    fontSize: 7.06,
    fontFamily: "",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  NavBar: {
    position: "absolute",
    bottom: 20,
    width: width,
    height: 75,
    zIndex: -1,
  },
  Group5377: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: "81.4%",
    bottom: "11.42%",
    left: "80.8%",
    right: "3.74%",
    borderRadius: 51,
    backgroundColor: "white",
    /*  linear-gradient(136.42deg, rgba(20,85,245,0.6) 0%, rgba(20,85,245,0.29) 100%, )  */
    // backdropFilter: "blur(20px)",
    width: 60,
    height: 60,
  },

  Group279: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    width: width,
    height: height,
  },
  ThemeLightNotchFalseCallInTrueWifiTrueBackFalse: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 19,
    paddingRight: 18,
    marginBottom: 18,
    backgroundColor: "rgba(0,0,0,1)",
  },
  Service: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 66,
  },
  Reception: {
    width: 16.5,
    height: 10,
    marginRight: 4,
  },
  Txt512: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "700",
    lineHeight: 12,
    letterSpacing: -0.12,
    color: "rgba(255, 255, 255, 1)",
    marginRight: 4,
  },
  Wifi: {
    width: 16.62,
    height: 12,
  },

  Time: {
    width: 31.8,
    height: 8.88,
    marginRight: 125,
  },
  Battery: {
    width: 26.5,
    height: 11.5,
  },

  Group1089: {
    display: "flex",
    flexDirection: "row",
    width: width,
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  BxMenu: {
    width: 38,
    height: 38,
  },
  Group1: {
    width: 54,
    height: 54,
    aspectRatio: 1
  },
  Frame162: {
    marginTop: 10,
    width: 22,
    aspectRatio: 1
  },

  Group48095695: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
    paddingLeft: 10
  },
  Txt840: {
    fontSize: 13,
    fontFamily: "Nunito, sans-serif",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    marginLeft: 10,
    marginRight: 5,
  },
  EmojioneFire: {
    width: 17,
    height: 17,
  },

  Frame74: {
    marginHorizontal: 10,
    width: width / 1.05,
    height: 77,
    marginBottom: 32,
  },
  Group979: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 11,
    paddingLeft: 15
  },
  Group5457: {
    width: 43,
    height: 43,
    marginRight: 6,
  },
  // multiple1: {
  //   main: "Txt471",
  //   seg1: "[object Object]",
  //   seg2: "[object Object]",
  // },

  // multiple2: {
  //   main: "Txt948",
  //   seg1: "[object Object]",
  //   seg2: "[object Object]",
  // },
  Group205: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 14,
    position: 'absolute',
    top: 450,
    justifyContent: 'space-around',
    width: width
  },
  Group312: {
    display: "flex",
    flexDirection: "column",
  },
  Frame160: {
    width: 26,
    height: 24,
    marginBottom: 2,
  },
  Txt188: {
    fontSize: 10,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },

  Group453: {
    display: "flex",
    flexDirection: "column",
  },
  Frame157: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  Txt188: {
    fontSize: 10,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },

  BytesizeFlag: {
    width: 30,
    height: 30,
  },

  Group322: {
    display: "flex",
    flexDirection: "row",
    position: 'absolute',
    top: 500,
    left: 15
  },
  Group5457: {
    width: 43,
    height: 43,
    marginRight: 6,
  },
  Group5455: {
    display: "flex",
    flexDirection: "column",
    marginRight: 30,
  },
  // multiple3: {
  //   main: "Txt6510",
  //   seg1: "[object Object]",
  //   seg2: "[object Object]",
  // },
  Txt580: {
    fontSize: 9,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(116,116,116,1)",
  },

  CarbonOverflowMenuVertical: {
    width: 60,
    height: 60,
  },

  CarbonOverflowMenuVertical1: {
    width: 40,
    height: 40
  },

  CarbonOverflowMenuVertical2: {
    width: 30,
    height: 30
  },
  hotImage: {
    width: (width - 100) / 5,
    height: width / 5.7
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row'
  },
  columnStyle: {
    display: 'flex',
    flexDirection: 'column'
  },

  Txt9010: {
    fontSize: 9,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(116,116,116,1)",
  },
  footerIcon: {
    width: 26,
    height: 25
  },
  fontWhite: {
    color: 'white'
  },
  fontBlack: {
    color: 'black'
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
  bottomPlusIcon: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    backgroundColor: '#1455F5',
    width: 58,
    height: 58,
    borderRadius: 29,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 120,
    right: width / 10,
    width: width / 1.2,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 1
  },
  fontMenu: {
    fontSize: 32,
    color: 'black',
    lineHeight: 50
  },
  bottomMenuItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 80,
    width: '100%',
    paddingHorizontal: 50,
    alignItems: 'center',
  }
})
