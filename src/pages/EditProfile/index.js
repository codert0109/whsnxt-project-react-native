import { placeholder } from "i18n-js";
import React, { useState } from "react"
import { StyleSheet, Image, Text, View, Dimensions, TextInput } from "react-native";
import DropDown from '../../components/Dropdown';

const { width, height } = Dimensions.get('screen');

function StyledInput({ label, type, onChangeText, value, autoFocus, width, multiline, numberOfLines }) {
  return (
    <View style={styles.Group4}>
      <Text style={styles.Txt066}>{label}</Text>
      <View style={{ ...styles.Rectangle17_, width: width }} />
      <View style={styles.Rectangle14_}>
        <TextInput
          style={{ color: 'white', textAlignVertical: 'top' }}
          autoFocus={autoFocus}
          textContentType={type}
          value={value}
          onChange={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    </View>
  )
}

function StyledDropDown({ items, label, value, width, placeholder }) {
  return (
    <View style={styles.Group4}>
      <Text style={styles.Txt066}>{label}</Text>
      <View style={{ ...styles.Rectangle17_, width: width }} />
      <View style={styles.Rectangle14_}>
        <DropDown
          items={items}
          style={{ marginRight: 20, width: '100%' }}
          color={"white"}
          placeholder={placeholder}
          borderColor={'black'}
          positionLeft={30}
          width
        ></DropDown>
      </View>
    </View>
  )
}

export default function EditProfileScreen({ navigation, route }) {

  const [isEditStatus, setIsEditStatus] = useState(false);

  onChangeInput = () => {

  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={(e) => { { navigation.goBack() } }}
        />
        <Text style={styles.Txt432}>Profile</Text>
      </View>
      {
        route.params?.accountType == 'talent' && <>
          <View style={{ alignSelf: 'center' }}>
            <Image source={require('./user.png')} style={{ alignSelf: 'center', marginTop: 20 }} />
            <Image source={require('./i_online.png')} style={{ position: 'absolute', bottom: 0, right: 0 }} />
          </View>
          <Text style={{ color: 'white', alignSelf: 'center', marginTop: 10 }}>John Doe</Text>
          <StyledInput
            label={'Description'}
            type={'name'}
            onChangeText={onChangeInput}
            width={80}
            multiline={true}
            numberOfLines={4}
          ></StyledInput>
          <StyledInput
            label={'User Name'}
            type={'name'}
            onChangeText={onChangeInput}
            width={80}
          ></StyledInput>
          <StyledInput
            label={'Email'}
            type={'emailAddress'}
            onChangeText={onChangeInput}
            width={40}
          ></StyledInput>
          <StyledInput
            label={'Phone Number'}
            type={'telephoneNumber'}
            onChangeText={onChangeInput}
            width={100}
          ></StyledInput>
          <StyledDropDown
            label={"Gender"}
            width={50}
            items={['Male', 'Female', 'Not a both']}
            placeholder={"Male"}
          />
          <StyledDropDown
            label={"Category"}
            width={50}
            items={['Music', 'Pop', 'Ryhtm']}
            placeholder={"Pop"}
          />
          <StyledDropDown
            label={"Genre"}
            width={50}
            items={['Music', 'Pop', 'Ryhtm']}
            placeholder={"Genre"}
          />
          <View style={{ backgroundColor: '#1455F5', borderRadius: 51, marginTop: 20, marginHorizontal: 10 }} onTouchEnd={() => navigation.goBack()}><Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', paddingVertical: 10 }}>Update Profile</Text></View></>
      }
      {
        (route.params?.accountType == 'user' || route.params?.accountType == undefined) && <>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View>
              <Image source={require('./user.png')} style={{ alignSelf: 'center', marginTop: 20 }} />
              <Image source={require('./i_edit.png')} style={{ position: 'absolute', bottom: -10, right: -10 }} onTouchEnd={() => setIsEditStatus(!isEditStatus)} />
            </View>
            <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 10, fontSize: 24, fontWeight: 'bold' }}>John Doe</Text>
          </View>
          <TextInput
            style={{ width: '100%', backgroundColor: 'black', color: '#1455F5', borderColor: '#1455F5', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginTop: 50 }}
            placeholder={"Email@gmail.com"}
            placeholderTextColor="#1455F5"
            editable={isEditStatus}
            selectTextOnFocus={isEditStatus}
            autoFocus={isEditStatus}
          />
          <TextInput
            style={{ width: '100%', backgroundColor: 'black', color: '#1455F5', borderColor: '#1455F5', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginTop: 30 }}
            placeholder={"+9087665543322"}
            placeholderTextColor="#1455F5"
            editable={isEditStatus}
            selectTextOnFocus={isEditStatus}
          />
          <TextInput
            style={{ width: '100%', backgroundColor: 'black', color: '#1455F5', borderColor: '#1455F5', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginTop: 30 }}
            placeholder={"Address here, street 104"}
            placeholderTextColor="#1455F5"
            editable={isEditStatus}
            selectTextOnFocus={isEditStatus}
          />
          {isEditStatus && <View style={{ backgroundColor: '#1455F5', borderRadius: 20, paddingVertical: 10, position: 'absolute', bottom: 100, width: width - 40, left: 20 }} onTouchEnd={() => navigation.goBack()}><Text style={{ textAlign: 'center', color: 'white' }}>Save</Text></View>}
          {!isEditStatus && <View style={{ backgroundColor: '#1455F5', borderRadius: 20, paddingVertical: 10, position: 'absolute', bottom: 100, width: width - 40, left: 20 }} onTouchEnd={() => navigation.goBack()}><Text style={{ textAlign: 'center', color: 'white' }}>Back</Text></View>}
        </>
      }
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
  Txt432: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "600",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
  },
  Group4: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  Rectangle14_: {
    display: 'flex',
    backgroundColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#23437D',
    width: width - 60,
    borderRadius: 2,
  },
  Rectangle17_: {
    position: 'absolute',
    top: -5,
    left: 15,
    backgroundColor: 'black',
    height: 20,
    zIndex: 1,
  },
  Txt066: {
    position: 'absolute',
    top: -15,
    left: 15,
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    color: '#23437D',
    height: 50,
    zIndex: 2,
  },
})
