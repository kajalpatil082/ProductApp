import React, { Component } from 'react';

import {
	View,
	Text,
	FlatList,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';

import CartItems  from './CartItems.component';
import CustomerForm from './CustomerForm.component';

class FormItems extends Component {  
    onPressButton = () => {
        console.log('props---->',this.props.navigation);
       //this.props.navigation.navigate('Receipt');
         Alert.alert('Order Placed Sucessfully')
         
        }
    
      renderButton() {
            return (
                <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                    <Text style={styles.btnText}>Order Placed</Text>
                </TouchableOpacity>
            );
        }
  render() {
      const { cartItems, navigation, cartTotal } = this.props;
      
    return (
      <View style={styles.container}>
            	
            		<View style={styles.annouc}>
            			<Text style={styles.anncText}>Items</Text>
            		</View>
            		<View style={styles.ckitems}>
            		<FlatList 
                  data={cartItems}
            			renderItem={({item, index}) => <CartItems item={item} index={index} />}
            			keyExtractor={(item) => item.id}
            			ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
            		/>
            		<Text style={styles.text}>Total: $ {(cartTotal).toFixed(2)}</Text>	
                   
            		</View>
            		<View style={styles.custForm}>
                    {this.renderButton()}
            		</View>

       </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  custForm: {
    flex: 1
  },
  ckitems: {
 height: "auto"
  },
    annouc:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'red'
    },
    anncText:{
        textAlign: 'center',
        color: '#fff'  
    },
    btn: {
        backgroundColor: '#34495e',
        borderRadius: 3,
        padding: 12,
      //  flex: 1,
        height:50
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14
    }

});

export default FormItems;