import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import  Product  from '../components/Product.component';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';
import Logo from '../components/Logo.component';
import Cart from '../components/Cart.component';
import themes from '../styles/theme.style';

class Products extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Products',
      headerLeft: <Logo navigation={navigation}/>,
     
    }
  }
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  addItemsToCart = (product) => {
    console.log("adad item--->>",product)
      this.props.addToCart(product);
  }
AddItems=(products)=>
{
  console.log("adaddeddd item--->>",products)
}
componentWillUnmount()
{
  console.log('#######000######');
  
}
  render() {
    const { products, navigation } = this.props
    return (
        <View style={styles.container}>
          
        <Cart navigation={navigation}/>
      
        <View style={styles.body}>
         
          <FlatList 
          data={products} 
          renderItem={({item}) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item}/>}
          keyExtractor ={(item) => item.id}
          ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }/>
        </View>
      </View>
 
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      marginTop:10
    },
    addBtn: {
      borderRadius: 30,
      margin: 10,
      backgroundColor: themes.BUTTON_COLOR
  },
  text: {
      color: '#fff',
      fontSize: 16,
      padding: 10,
      textAlign:'center'
  }
});
const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);
