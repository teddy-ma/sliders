'use strict';

var path = require('path');
var fm = require('front-matter');
var marked = require('marked');
var md = require('reveal.js/plugin/markdown/markdown');
var Mustache = require('mustache');
var mkdirp = require('mkdirp');
var fs = require('fs');
var getDirName = require('path').dirname;

var opts = {
    printMode: false,
    separator: '^(\r\n?|\n)---(\r\n?|\n)$',
    verticalSeparator: '^(\r\n?|\n)----(\r\n?|\n)$',
    revealOptions: {}
};


// monkey patch -- add new end lines
function split_content(content){
  var ret = [];
  var lines = content.split('\n');
  lines.forEach(function (line, index, array){
    if(line.indexOf("###") >= 0){
      line = "----\n\n" + line;
    }else{
      if(line.indexOf("##") >= 0){
        line = "---\n\n" + line;
      }
    }
    ret.push(line);
  });
  return ret.join("\n");
}

function build_index(){

}

function build_slider(){
  var md_files = fs.readdirSync('./src');
  md_files.forEach(function(file){
    if(file.indexOf('.md') > 1){
      var name = file.slice(0, file.length - 3);
      fs.readFile('./src/' + file, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var content_with_split = split_content(data);
        var slides = md.slidify(content_with_split, opts);
        var view = {
          title: name,
          prefix: "../templates/revealjs/",
          slides: slides
        };
        fs.readFile("./templates/index.tpl", 'utf8', function(err, data){
          if (err) {
            return console.log(err);
          }
          var output = Mustache.render(data, view);
          mkdirp.sync(name);
          fs.writeFile(name + "/index.html", output);
        });
      });
    }
  });
}

build_slider();
