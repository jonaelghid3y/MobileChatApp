import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

const CustomeDrawer = () => {
    
  return (
      
      function CustomDrawerContent(props) {
       

        return (
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
           
          </DrawerContentScrollView>
        );
      }
  )
}

export default CustomeDrawer
