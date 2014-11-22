var log = require('log');
var spawn = require('spawner');

module.exports = function () {
   var harvesters = getCreepCountByRole("harvester");
   var guards = getCreepCountByRole("guard");
   var healers = getCreepCountByRole("healer");
   var scavengers = getCreepCountByRole("scavenger");
   var miners = getCreepCountByRole("miner");
   var haulers = getCreepCountByRole("hauler");
   
   if(miners < 1){
       spawn("miner");
   } else if(haulers < 1){
       spawn("hauler");
   } else if(guards < 2){
      spawn("guard_mk1");
  } else if(scavengers < 1){
      spawn("scavenger");
  } else if(healers < 1){
      spawn("healer");
  } else if(guards < 3){
      spawn("guard_mk2");
  } else if(guards < 5){
      spawn("guard_mk2");
  } else if(healers < 2){
      spawn("healer");
  }
   
//   if(harvesters<2){
//       spawn("harvester");
//   } else if(guards < 2){
//       spawn("guard_mk1");
//   } else if(healers < 1){
//       spawn("healer");
//   } else if(guards < 3){
//       spawn("guard_mk2");
//   } else if(scavengers < 1){
//       spawn("scavenger");
//   } else if(guards < 5){
//       spawn("guard_mk2");
//   } else if(healers < 2){
//       spawn("healer");
//   }
}

function getCreepCountByRole(role){
    var count = 0;
    for(var name in Game.creeps) {
       	var creep = Game.creeps[name];
	    if(creep.memory.role == role) {
	        count++;
	    }
   }
   return count;
}

function getCreepsByRole(role){
    var creeps = [];
    for(var name in Game.creeps) {
       	var creep = Game.creeps[name];
	    if(creep.memory.role == role) {
	        creeps.push(creep);
	    }
   }
   return creeps;
}