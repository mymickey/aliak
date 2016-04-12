'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path')
module.exports = yeoman.Base.extend({

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to alink RN  ' + chalk.red('generator-aliak') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'your are project name',
      default: process.cwd().split(path.sep).pop()
    }];
    this.prompt(prompts, function (answers) {
      this.props = answers;
      // To access props later use this.props.someAnswer;
      this.projectName = answers.projectName;
      // Save user configuration options to .yo-rc.json file
      this.config.set({
        projectName: this.projectName
      });
      this.config.save();
      done();
    }.bind(this));
  },

  writing: {
    app:function () {
      console.log('write',this.projectName);
      this.fs.copy(
        this.templatePath('index'),
        this.destinationPath('index.js')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {projectName: this.projectName}
      );
      this.fs.copy(
        this.templatePath('rn'),
        this.destinationPath('rn.json')
      );
      this.directory('src', 'src');
    }
  },

  install: function () {
    var self = this;
    
    //var done = this.async();
    //this.npmInstall('rn-packager@~0.2.0 -g',{},function(){
      self.spawnCommand('tnpm', ['install'],function(){
       // done()
      });
      
     //});
    //this.installDependencies();
  }
});
