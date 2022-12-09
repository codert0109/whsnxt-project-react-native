import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput } from "react-native"
import _ from "lodash";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DocumentPicker from 'react-native-document-picker';

const { width, height } = Dimensions.get('screen');

export default function EventScreen({ navigation }) {
  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);

  onToggleBottomMenu = () => {
    setBottomMenuVisible(!bottomMenuVisible);
  }

  selectAudio = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
    } catch (err) {
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={(e) => { { e.stopPropagation(); navigation.goBack() } }}
        />
        <Text style={styles.Txt432}>Event</Text>
      </View>
      <ScrollView>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 30, marginBottom: 10 }}>October 2020</Text>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'column', borderRightColor: 'white', borderRightWidth: 2, paddingRight: 20, width: 70 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>12</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>wed</Text>
          </View>
          <View style={{ borderRadius: 7, backgroundColor: '#7BC1DE', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, marginLeft: 30, marginVertical: 5 }}>
            <Text style={{ color: 'white' }}>Meeting with Alex</Text>
            <Text style={{ color: 'white' }}>9:00 AM</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'column', borderRightColor: 'white', borderRightWidth: 2, paddingRight: 20, width: 70 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>12</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>wed</Text>
          </View>
          <View style={{ borderRadius: 7, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, marginLeft: 30, marginVertical: 5 }}>
            <Text style={{ color: 'black' }}>Ann's birthday</Text>
            <Text style={{ color: 'black' }}>9:00 AM</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'column', borderRightColor: 'white', borderRightWidth: 2, paddingRight: 20, width: 70 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>17</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>mon</Text>
          </View>
          <View style={{ borderRadius: 7, backgroundColor: '#FF8E00', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, marginLeft: 30, marginVertical: 5 }}>
            <Text style={{ color: 'white' }}>Flight to Italy</Text>
            <Text style={{ color: 'white' }}>9:00 AM</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'column', borderRightColor: 'white', borderRightWidth: 2, paddingRight: 20, width: 70 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>12</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>wed</Text>
          </View>
          <View style={{ borderRadius: 7, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, marginLeft: 30, marginVertical: 5 }}>
            <Text style={{ color: 'black' }}>Ann's birthday</Text>
            <Text style={{ color: 'black' }}>9:00 AM</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'column', borderRightColor: 'white', borderRightWidth: 2, paddingRight: 20, width: 70 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>12</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>wed</Text>
          </View>
          <View style={{ borderRadius: 7, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, marginLeft: 30, marginVertical: 5 }}>
            <Text style={{ color: 'black' }}>Ann's birthday</Text>
            <Text style={{ color: 'black' }}>9:00 AM</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'column', borderRightColor: 'white', borderRightWidth: 2, paddingRight: 20, width: 70 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>28</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>fri</Text>
          </View>
          <View style={{ borderRadius: 7, backgroundColor: '#F96A6A', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, marginLeft: 30, marginVertical: 5 }}>
            <Text style={{ color: 'white' }}>Flight to Italy</Text>
            <Text style={{ color: 'white' }}>9:00 AM</Text>
          </View>
        </View>
      </ScrollView>
      {
        bottomMenuVisible ? (
          <View style={styles.bottomMenu}>
            <View style={{ backgroundColor: '#2f2f2f', height: 80, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 30, color: 'white' }}>Create New Event</Text>
              <Image source={require('../HomeScreen/i_close_white.png')} style={{ position: 'absolute', right: 20, top: 20 }} onStartShouldSetResponder={() => onToggleBottomMenu()} />
            </View>
            <View style={{ ...styles.bottomMenuItem, height: 200, paddingTop: 20 }} onTouchEnd={() => selectAudio()}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20, height: 180, width: '80%', borderColor: 'black', borderWidth: 0.4, alignSelf: 'center' }}
                editable={false}
                selectTextOnFocus={false}
              ></View>
              <Text style={{ color: '#9C9C9C', position: 'absolute', right: '58%', top: 60, fontSize: 60, alignSelf: 'center' }}>+</Text>
            </View>
            <View style={{ ...styles.bottomMenuItem, paddingTop: 10 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Event Name</Text>
              <TextInput
                placeholder="Meet google CEO"
                style={{ backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%' }}
              />
            </View>
            <View style={{ ...styles.bottomMenuItem, paddingTop: 5 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Time</Text>
              <TextInput
                placeholder="3:30 PM"
                style={{ backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%' }}
              />
            </View>
            <View style={{ ...styles.bottomMenuItem, paddingTop: 5 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Time</Text>
              <TextInput
                placeholder="California, USA"
                style={{ backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%' }}
              />
              <Image source={require('./i_location.png')} style={{ position: 'absolute', right: 50, top: 40 }} />
            </View>
            <View style={{ ...styles.bottomMenuItem }}>
              <View style={{ backgroundColor: 'black', paddingHorizontal: 40, paddingVertical: 5, borderRadius: 30, alignSelf: 'center', marginTop: 10 }} onTouchEnd={() => onToggleBottomMenu()}>
                <Text style={{ color: 'white' }}>Create</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.bottomPlusIcon} onStartShouldSetResponder={() => onToggleBottomMenu()}>
            <Image source={require('../HomeScreen/i_plus_white.png')} />
          </View>
        )
      }
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 1
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: 'space-around',
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 1
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "50%",
    textAlign: "center",
    color: 'white'
  },
  bottomPlusIcon: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: '#1455F5',
    width: 58,
    height: 58,
    borderRadius: 29,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomMenuItem: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 80,
    width: '100%',
    paddingHorizontal: 50,
    alignItems: 'flex-start',
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row'
  },
})
