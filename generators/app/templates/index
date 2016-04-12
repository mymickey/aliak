'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View
} = React;
var AK = require('@ali/AK');

var {
    DA
} = AK;
var Router = AK.getRouter();
var Hello = require('./src/hello');

var Index = React.createClass({
    render () {
        return (<Router component={Hello} />);
    }
});


AppRegistry.registerComponent('index', () => Index);