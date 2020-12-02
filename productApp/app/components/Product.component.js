import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
import themes from '../styles/theme.style';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected:false,
            count:0
        }
    }
  componentWillUnmount()
  {
    this.setState({
        selected:false,
        count:0})
    
  }
  
    addToCart = () => {
    console.log("kajal--->>",this.props)
       this.props.addItemsToCart(this.props.item)
    }
    selectedItem=(product)=>{
        this.setState({selected:true,count:this.state.count+1});
         this.props.addItemsToCart(this.props.item)

        console.log('Product--->>>',product);
    }
    render() {
        const { product } = this.props;
            return (
        <TouchableOpacity style={styles.container} onPress={()=>this.selectedItem(product)}>
                       {this.state.selected?<View style={{width:20,height:20,backgroundColor:'green',borderRadius:30,alignSelf:'flex-end'}}>
            <Text style={{color:'#fff',textAlign:'center',padding:2}}>{this.state.count}</Text>
                       </View>:null}
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Image source={product.picture} style={{width:150,height:150}}/>
            <View style={styles.productDes}>
                <Text>{product.title}</Text>
                <Text>${(product.cost).toFixed(2)}</Text>
                <Text>{product.author}</Text>
                {/* <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity> */}
            </View>
            </View>
           
        </TouchableOpacity>
    );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        margin: 10,
    },
    productDes: {
       // justifyContent: 'center',
       // alignItems: 'center',
        marginTop: 10,
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
        backgroundColor: themes.BUTTON_COLOR
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10
    }
});

export default Product;
