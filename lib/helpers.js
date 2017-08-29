let fs = require('fs');

let featuredSongs = [
  { name: 'respect', 
    songPath: 'songs/Aretha_Franklin_-_Respect.mid', 
    thumbPath: 'imgs/respect.png'
  },
  { name: 'howBlueCanYouGet', 
    songPath: 'songs/BB_King_-_How_Blue_Can_You_Get.mid', 
    thumbPath: 'imgs/howBlueCanYouGet.png'
  },
  { name: 'battleOfNewOrleans', 
    songPath: 'songs/Bluegrass_-_Battle_Of_New_Orleans.mid', 
    thumbPath: 'imgs/battleOfNewOrleans.png'
  },
  { name: 'bigPoppa', 
    songPath: 'songs/Notorious_BIG_-_Big_Poppa.mid', 
    thumbPath: 'imgs/bigPoppa.png'
  },
  { name: 'ocarinaOfTime', 
    songPath: 'songs/Video_Game_Themes_-_Zelda-_Ocarina_Of_Time.mid', 
    thumbPath: 'imgs/ocarinaOfTime.png'
  },
  { name: 'seinfeld', 
    songPath: 'songs/TV_Themes_-_Seinfeld.mid', 
    thumbPath: 'imgs/seinfeld.png'
  },
  { name: 'iDreamOfJeannie', 
    songPath: 'songs/TV_Themes_-_I_Dream_Of_Jeannie.mid', 
    thumbPath: 'imgs/iDreamOfJeannie.png'
  },
  { name: 'bach113', 
    songPath: 'songs/Johann_Sebastian_Bach_-_Well-Tempered_Clavier_Book_1_Fugue_13.mid', 
    thumbPath: 'imgs/bach113.png'
  },
  { name: 'bwv846',
    songPath: 'songs/bwv-846.midi',
    thumbPath: 'imgs/bwv846.png'
  },
  { name: 'iHeardItThroughtheGrapeVine', 
    songPath: 'songs/Marvin_Gaye_-_I_Heard_It_Through_the_Grapevine.mid', 
    thumbPath: 'imgs/iHeardItThroughtheGrapeVine.png'
  }
];

module.exports.featuredSongs = featuredSongs;

exports.findSongByName = function(name){
  return featuredSongs.find(function(s){ return s.name === name });
}

exports.testHelperFn = function(){
  return "text from testHelperFn";
}

exports.getGraphData = function(filePath){
  return fs.readFileSync(filePath, 'utf8');
}
