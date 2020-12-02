import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	
} from 'react-native';
import { connect } from 'react-redux';


export class Cart extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	
	  };
	}

	// componentWillReceiveProps(nextProps) {
	//     if (nextProps.cartItems !== this.props.cartItems) {
	//     	this.startAnimation();
	//     }
	// }

	
	onPress = () => {
		this.props.navigation.navigate('Checkout');
	}
    render() {
    	const { cartItems } = this.props;
    	
        return (
            <View style={[styles.container]}>
            	<TouchableOpacity  onPress={this.onPress}>
            		<Text style={styles.cart}>Your cart: {(cartItems).length} items Next</Text>
            		<Text style={[styles.cart,]}></Text>
            	</TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart
});

const styles = StyleSheet.create({
	container:{
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	cart:{
		color: '#000',
		fontSize: 20,
	//	padding:10,
		fontWeight:'bold'
	}
})

export default connect(
    mapStateToProps
)(Cart);
