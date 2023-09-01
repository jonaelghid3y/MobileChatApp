import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native'
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState, useRef, useEffect} from 'react';
import Imagepreview from './Imagepreview';
import * as MediaLibrary from 'expo-media-library';
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function MobileCamera() {

  const navigation = useNavigation();

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const cameraRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.on);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    (async () => {
      const CameraPermissions = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraPermissions.status == 'granted')
      const MediaPermissions = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermission(MediaPermissions.status == 'granted')
      // console.log(CameraPermissions);
      // // console.log(MediaPermissions);
    })();
  },[]);
 
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync()
        console.log(picture);
        setPicture(picture)
      } catch (error) {
        console.log(error);
      }
    }
  }
  const deletePicture = async ()=>{

    setPicture(null)

    console.log('raderad')

    

  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));

  }
   const toggleFlash = () => {
    setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
  }
  const savePicture = async () => {
    try {
      // Create an asset out fo the picture
      const asset = await MediaLibrary.createAssetAsync(picture.uri)
      
      // Retrieve an existing album
      const album = await MediaLibrary.getAlbumAsync('Expo');

      if (album == null) {
        await MediaLibrary.createAlbumAsync('Expo', asset, false)
      } else {
        // Put the asset (picutre) in the album
        await MediaLibrary.addAssetsToAlbumAsync(asset, album.id, false);
      }

      setPicture(null)
      navigation.navigate('Usersettings');

    } catch (error) {
      console.log(error)
    }
  }
  if (picture !== null) {
    return(
    <Imagepreview deletePicture={deletePicture} savePicture={savePicture} picture={picture}/>
    )

  } 
  else{
    return(
      <SafeAreaView style={styles.container}>
      <Camera 
        style={styles.cameraContainer} 
        type={type} 
        flashMode={flash} 
        ref={cameraRef}
      >
        <View style={styles.buttonsTopContainer}>
          <TouchableOpacity style={styles.generalButton} >
            <FontAwesome name="refresh" size={18} color="white" onPress={() => toggleCameraType()}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.generalButton}>
            <Entypo name="flash" size={18} color={flash === FlashMode.on ? "yellow" : "white"} onPress={() => toggleFlash()}/>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsBottomContainer}>
          <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
            <Entypo name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  )
}
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
    justifyContent: 'space-evenly',
    gap: 295,
    marginRight: 20,
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
    backgroundColor: '#177ca4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 30,
    height: 30,
    marginRight: 5,
  },
  cameraButton: {
    backgroundColor: '#177ca4',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 5
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
  }
});