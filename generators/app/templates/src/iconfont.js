'use strict';
var React = require('react-native');
var Btn = require('./Button')

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
var Iconfont = DA.cmp.Iconfont;
var Panel = React.createClass({
	 
   render:function(){
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text>iconfont使用例子:</Text>
        <Iconfont style={{width:40,height:40}} iconfontConfig={{color:'red',bgColor:'transparent',fontSize:40,iconCode:'&#x7009'}} />
      </View>
      )

   } 
});

module.exports = Panel;