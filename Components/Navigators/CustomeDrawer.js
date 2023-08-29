import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

const CustomeDrawer = () => {
    const { handleLogout, } = useContext(AuthContext);
  return (
      
      function CustomDrawerContent(props) {
       

        return (
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="logout"
                onPress={() => handleLogout}
            />
          </DrawerContentScrollView>
        );
      }
  )
}

export default CustomeDrawer
