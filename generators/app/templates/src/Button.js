'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  ScrollView,
} = React;
var AK = require('@ali/AK');
var {
    Router,
    SDK,
    Util,
    DA
  } = AK;

var Button = React.createClass({
	
   render:function(){
    return (<TouchableOpacity onPress={this.props.onPress} style={[{marginTop:10},this.props.btnStyle]}><View style={[styles.container]}>
           <Text>{this.props.text}</Text>
        </View></TouchableOpacity>)
   } 
});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        paddingTop:5,
        paddingLeft:7,
        paddingRight:7,
        paddingBottom:5
    }
});
module.exports = Button;