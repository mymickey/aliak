'use strict';
var React = require('react-native');
var Btn = require('./Button')
var ToastBtn = require('./toast')
var NavTipBtn = require('./navTip')
var PickerBtn = require('./picker')
var PushBtn = require('./push')
var PushBtn2 = require('./push2')
var SliderBtn = require('./slider')
var IconfontBtn = require('./iconfont')
var VideoBtn = require('./video')

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
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var Hello = React.createClass({
	statics:{
      navbarPassProps:{
        statusBarColor:'black',
        style: {},
        title:'title'
      }
    },
    
   render:function(){
    return (<View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView} scrollEventThrottle={16} automaticallyAdjustContentInsets={false}>

            <ToastBtn />
            <NavTipBtn />
            <PickerBtn />
            <PushBtn />
            <PushBtn2 />
            <SliderBtn />
            <IconfontBtn />
            <VideoBtn />
          </ScrollView>
        </View>)
   } 
});
var styles = StyleSheet.create({
    scrollView:{
      flex:1,
      paddingLeft:20,paddingRight:20,
      width:windowSize.width,
      // flexDirection:'column',

    },
    container: {
        paddingTop:64,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

        flexDirection:'column',
    }
});
module.exports = Hello;