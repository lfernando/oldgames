(function() {
  var basePath = "..";
  var romPath  = basePath+"/roms";
  var imgPath  = basePath+"/images";

  var app = angular.module('oldGames', []);

  app.controller('oldgamesController', function(){
  	 this.games = roms;

  	 this.open = function(fileName){
  	 	// alert(fileName);
      // console.log(fileName);
      // console.log(fs.readdirSync("roms"));
  	 	child_process.execFile('mame', [fileName], {cwd:'emulators/mame'}, function(error, stdout, stderr){console.log(stdout);});
  	 };
  });

  function getRoms(){
    var files = fs.readdirSync(romPath)
    var roms  = [];
    for (var i in files) {
      var array = files[i].split(".");
      var rom = {};
      rom["name"] = array[0];
      if (fs.existsSync(imgPath+"/"+rom["name"]+".png"))
        rom["image"] = imgPath+"/"+rom["name"]+".png";
      else
        rom["image"] = imgPath+"/noimg.png";
      roms.push(rom);
    }
    return roms;
  }

  var child_process = require('child_process');
  var fs = require('fs');

  var roms = getRoms(); 
  // var mameGames = [
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  //   { name: 'Marvel Vs. Capcom', 					 file: "mvscu", img: "../data/mvscu.png" },
  //   { name: 'Marvel Super Herois Vs Street Figther', file: "mshvsf", img: "../data/mshvsf.png" },
  // ];
})();
