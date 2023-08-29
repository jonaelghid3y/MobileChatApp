import React from 'react'
import { View } from 'react-native'
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'
import { useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function RootNavigator({navigation}) {
  
  const {accessToken} = useContext(AuthContext);

  
  return (
    <>
      
      {
        accessToken !== null
          ? <AppNavigator />
          : <AuthNavigator />
      }

    </>
  )
}
