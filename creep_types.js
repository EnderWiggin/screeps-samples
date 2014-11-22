module.exports = {
   harvester:{body:[Game.WORK, Game.WORK,Game.CARRY, Game.MOVE, Game.MOVE], role:"harvester"},
   healer:{body:[Game.HEAL, Game.MOVE], role:"healer"},
   scavenger:{body:[Game.CARRY, Game.MOVE], role:"scavenger"},
   hauler:{body:[Game.CARRY, Game.MOVE], role:"hauler"},
   miner:{body:[Game.WORK, Game.WORK, Game.CARRY, Game.MOVE], role:"miner"},
   guard_mk1:{body:[Game.TOUGH, Game.ATTACK, Game.ATTACK, Game.MOVE], role:"guard"},
   guard_mk2:{body:[Game.TOUGH, Game.ATTACK, Game.RANGED_ATTACK, Game.MOVE],role:"guard"}
};