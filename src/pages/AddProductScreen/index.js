import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, ScrollView } from "react-native";
import DocumentPicker from 'react-native-document-picker';

const { width, height } = Dimensions.get('screen');

export default function AddProduct({ navigation }) {

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
          source={require('./Group.png')}
          onTouchEnd={(e) => { { navigation.goBack() } }}
        />
        <Text style={styles.Txt432}>Add Product</Text>
      </View>
      <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'column' }} >
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Product Name</Text>
          <TextInput
            placeholder="Product Name"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Pop</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Rock</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Country</Text></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Hard Rock</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Blues</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Rythm</Text></View>
          </View>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Audio</Text>
          <TextInput
            placeholder="Only musician and commedians"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Video</Text>
          <TextInput
            placeholder="Category"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Pop</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Rock</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Country</Text></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Hard Rock</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Blues</Text></View>
            <View style={{ backgroundColor: 'black', borderRadius: 34, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, width: '30%' }}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Rythm</Text></View>
          </View>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Audio</Text>
          <View onTouchEnd={() => selectAudio()}>
            <View
              style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20, height: 50, width: '100%' }}
              editable={false}
              selectTextOnFocus={false}
            ></View>
            <Text style={{ color: '#9C9C9C', position: 'absolute', right: 10, fontSize: 30, alignSelf: 'center' }}>+</Text>
          </View>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Album Title</Text>
          <TextInput
            placeholder="Album Title"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Album Cover</Text>
          <View onTouchEnd={() => selectAudio()}>
            <View
              style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20, height: 200, width: '100%' }}
              editable={false}
              selectTextOnFocus={false}
            ></View>
            <Text style={{ color: '#9C9C9C', position: 'absolute', right: width / 2.5, top: 50, fontSize: 70, alignSelf: 'center' }}>+</Text>
          </View>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Add track title</Text>
          <TextInput
            placeholder="Add Track Title"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Video title</Text>
          <TextInput
            placeholder="Video Title"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <View onTouchEnd={() => selectAudio()}>
            <View
              style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20, height: 200, width: '100%', marginTop: 10 }}
              editable={false}
              selectTextOnFocus={false}
            ></View>
            <Text style={{ color: '#9C9C9C', position: 'absolute', right: width / 2.5, top: 50, fontSize: 70, alignSelf: 'center' }}>+</Text>
          </View>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Description</Text>
          <TextInput
            placeholder="Description"
            multiline
            numberOfLines={10}
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20, textAlignVertical: 'top' }}
          />
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Title of photo</Text>
          <TextInput
            placeholder="Title of photo"
            style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View onTouchEnd={() => selectAudio()} style={{ width: '30%' }}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 10, height: width / 3.5, width: '100%', marginTop: 10 }}
                editable={false}
                selectTextOnFocus={false}
              ></View>
              <Text style={{ color: '#9C9C9C', position: 'absolute', right: width / 2.5, top: 20, fontSize: 70, alignSelf: 'center' }}>+</Text>
            </View>
            <View onTouchEnd={() => selectAudio()} style={{ width: '30%' }}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 10, height: width / 3.5, width: '100%', marginTop: 10 }}
                editable={false}
                selectTextOnFocus={false}
              ></View>
              <Text style={{ color: '#9C9C9C', position: 'absolute', right: width / 2.5, top: 20, fontSize: 70, alignSelf: 'center' }}>+</Text>
            </View>
            <View onTouchEnd={() => selectAudio()} style={{ width: '30%' }}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 10, height: width / 3.5, width: '100%', marginTop: 10 }}
                editable={false}
                selectTextOnFocus={false}
              ></View>
              <Text style={{ color: '#9C9C9C', position: 'absolute', right: width / 2.5, top: 20, fontSize: 70, alignSelf: 'center' }}>+</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '40%' }}>
              <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Price</Text>
              <TextInput
                placeholder="EU-44"
                style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
              />
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Product date</Text>
              <TextInput
                placeholder="09-12-2021"
                style={{ backgroundColor: 'white', borderRadius: 10, paddingLeft: 20 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginBottom: 200 }}>
            <View style={{ width: '45%', borderRadius: 40, borderWidth: 2, borderColor: '#1455F5', backgroundColor: 'black', paddingVertical: 10 }} onTouchEnd={() => navigation.goBack()}>
              <Text style={{ color: '#1455F5', fontSize: 18, textAlign: 'center' }}>Cancel</Text>
            </View>
            <View style={{ width: '45%', borderRadius: 40, borderWidth: 0.4, borderColor: 'red', backgroundColor: '#1455F5', paddingVertical: 10 }} onTouchEnd={() => navigation.goBack()}>
              <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Add</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    fontSize: 16, marginTop: 10,
    fontFamily: "",
    fontWeight: "600",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
  },
})
