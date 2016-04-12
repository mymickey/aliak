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

var NavTip = React.createClass({
	 onPress:function(){
     DA.cmp.navTip({
      duration:2000,
      content:'toastText',
      isVisible:true
     })
   },
   render:function(){
    return (<Btn text='navTip' onPress={this.onPress} />)
   } 
});

module.exports = NavTip;