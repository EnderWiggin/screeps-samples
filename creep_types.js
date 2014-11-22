module.exports = {
   harvester : {role:"harvester", body:[Game.WORK, Game.WORK,Game.CARRY, Game.MOVE, Game.MOVE]},
   miner     : {role:"miner",     body:[Game.WORK, Game.WORK, Game.CARRY, Game.MOVE]},
   hauler    : {role:"hauler",    body:[Game.CARRY, Game.MOVE]},
   scavenger : {role:"scavenger", body:[Game.CARRY, Game.MOVE]},
   healer    : {role:"healer",    body:[Game.HEAL, Game.MOVE]},
   guard_mk1 : {role:"guard",     body:[Game.TOUGH, Game.ATTACK, Game.ATTACK, Game.MOVE]},
   guard_mk2 : {role:"guard",     body:[Game.TOUGH, Game.ATTACK, Game.RANGED_ATTACK, Game.MOVE]}
};