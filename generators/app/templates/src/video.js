'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;
var Btn = require('./Button')

var AK = require('@ali/AK');
var {
    DA
} = AK;
// var Router = AK.getRouter();
//var Hello = require('./src/hello');

var DemoVideo = React.createClass({
	statics:{
	      navbarPassProps:{
	        statusBarColor:'black',
	        buttons:[],
	        title:'video'
	      }
	  },
	getInitialState() {
	    return {
	          atTimescale:0,
	          atValue:0,
	          currentTime:0,
	          playableDuration:0
	    };
	},
	setTime(opt){

		delete opt.target;
		this.setState(opt);
	},
	renderTime(){
		var opt = this.state;
		var arr = [];
		for(var key in opt){
			arr.push(<View key={key}><Text>{key+':'+opt[key]}</Text></View>);
		}
		return arr;
	},
    render () {

        return (<View style={styles.ct}>
        <DA.cmp.Video.default source={{uri: 'http://alinkappstore.alicdn.com/video.mp4'}} // Can be a URL or a local file.
       rate={1.0}                   // 0 is paused, 1 is normal.
       volume={1.0}                 // 0 is muted, 1 is normal.
       muted={false}                // Mutes the audio entirely.
       paused={false}               // Pauses playback entirely.
       resizeMode="cover"           // Fill the whole screen at aspect ratio.
       repeat={false}                // Repeat forever.
       onLoadStart={this.loadStart} // Callback when video starts to load
       onLoad={this.setDuration}    // Callback when video loads
       onProgress={this.setTime}    // Callback every ~250ms with currentTime
       onEnd={this.onEnd}           // Callback when playback finishes
       onError={this.videoError}    // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
       <View style={styles.playInfo}>
       <Text>利用如下信息可以制作播放条:</Text>
       	{this.renderTime()}
       </View>
       </View>);
    }
});

var styles = StyleSheet.create({
	playInfo:{
		marginTop:250
	},
	ct:{
		height:200,
		width:320,
		paddingTop:64,
	},
	  backgroundVideo: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	  },
});
var V = React.createClass({
   onPress:function(){
   	  DA.getRouter().push({
	      component:DemoVideo,
	      passProps:{
	      }
     })   
   },
   render:function(){
    return (<Btn text='video' onPress={this.onPress} />)
   } 
});
module.exports = V