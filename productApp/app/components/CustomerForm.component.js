import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import { addOrder } from '../redux/actions/orderAction';
import { emptyCart } from '../redux/actions/cartActions';

class CustomerForm extends Component {
 
  constructor(props) {
    super(props);
    
}
  renderTextfield(options) {
    return (
        <TextInput style={styles.textField} onChangeText={(value) =>{}} 
                placeholder= {options.label}  keyboardType= {options.keyboard || 'default'}/>
      );
  }

  onPressButton = () => {
    console.log('props---->',this.props.navigation);
   this.props.navigation.navigate('Receipt');
       // Alert.alert('Order Placed Sucessfully')
     
    }

  renderButton() {
        return (
            <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
        );
    }

  render() {
    return (
            <View style={styles.panel}>
                {this.renderTextfield({name: 'address1', label: 'Address line 1'})}
                {this.renderTextfield({name: 'address2', label: 'Address line 2',})}
                {this.renderTextfield({name: 'country', label: 'Country', })}
                {this.renderTextfield({name: 'street', label: ' street'})}
                {this.renderTextfield({name: 'city', label: ' City'})}
                {this.renderButton()}
            </View>
    );
  }
}

const styles = StyleSheet.create({
	    panel: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        margin: 10
    },
    textField: {
        height: 40,
        margin: 8
    },
    btn: {
        backgroundColor: '#34495e',
        borderRadius: 3,
        padding: 12,
        flex: 1,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14
    }
});

const mapStateToProps = (state) => ({
	cartItems: state.cart.cart
})
export default connect(mapStateToProps, {addOrder, emptyCart})(CustomerForm);