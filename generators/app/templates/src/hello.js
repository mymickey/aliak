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
  Alert
} = React;
var AK = require('@ali/AK');
var {
    Router,
    SDK,
    Util,
    DA
  } = AK;

var Hello = React.createClass({
	statics:{
      navbarPassProps:{
        statusBarColor:'black',
        style: {},
        buttons:[{text:'edit',name:'edit'}],
        title:'title'
      }
    },
    onNavBtnPress:function   (nav,btnName,route) {
      Alert.alert(
              '提示',
              '温馨提示',
              [
                {text:'取消'},
                {text: '确定', onPress: function(){}},
              ]
            );
    },
   render:function(){
    return <View style={styles.container}><Text style={{color:'#000'}}>hello</Text></View>
   } 
});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
});
module.exports = Hello;