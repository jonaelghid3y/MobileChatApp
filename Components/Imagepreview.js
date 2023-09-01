import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,Image,SafeAreaView} from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons'; 

export default function Imagepreview({deletePicture,savePicture,picture}) {
    
  return (
    <SafeAreaView  style={styles.container}>
    <Image source={{uri: picture.uri}} style={{flex: 1}}/>
    <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.generalButton}>
          <Feather name="trash-2" size={30} color="white" onPress={() => deletePicture(null)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.generalButton}>
          <Entypo name="check" size={30} color="white"  onPress={() => savePicture()}/>
        </TouchableOpacity>

    </View>

  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center'
    },
    cameraContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'space-between',
      paddingTop: 40,
    },
    buttonsTopContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    buttonsBottomContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 20,
    },
  
    generalButton: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      width: 50,
      height: 50,
      marginRight: 5,
    },
    cameraButton: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 40,
      width: 80,
      height: 80,
    },
    text: {
      fontSize: 18,
      color: 'white',
      marginLeft: 20,
    }
  });
  
  