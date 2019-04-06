import React from 'react'
import {Platform, Dimensions} from 'react-native'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'

import AddCat from '../AddCat/AddCat'

const width = Dimensions.get('window').width

const DrawerNavigator= createDrawerNavigator({
    Home: {screen: AddCat},
})

export default createAppContainer(DrawerNavigator)