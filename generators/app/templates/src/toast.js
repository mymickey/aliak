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

var Toast = React.createClass({
	 onPress:function(){
     DA.cmp.toast({
      duration:2000,
      content:'toastText',
      isVisible:true
     })
   },
   render:function(){
    return (<Btn text='toast' onPress={this.onPress} />)
   } 
});

module.exports = Toast;