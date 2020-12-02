import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'

import Products from '../pages/Products';
import Checkout from '../pages/Checkout';


import themes from '../styles/theme.style';
import Form from '../pages/Form';

const Route = createStackNavigator(
{
  Products: { screen: Products},
  Checkout: { screen: Checkout},
  Receipt: { screen: Form}
},
{
 navigationOptions: {
 	headerStyle: {
 		backgroundColor: themes.BACKGROUND_COLOR,
 		//paddingHorizontal: 10,
 	},
 	headerTintColor: '#fff'
 }
}
);

export default Route;