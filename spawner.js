var log = require('log');
var types = require('creep_types');

module.exports = function (type) {
    var cfg = types[type];
    var spawn = null;
    var creep;
    for(var spawnName in Game.spawns){
        spawn = Game.spawns[spawnName];
        creep = spawn.createCreep(cfg.body, undefined, {role:cfg.role});
        if(creep <0){
            continue;
        } else {
            log("spawning", type, creep,"from",spawnName);
            return;
        }
    }
    if(spawn === null){
        //log("spawn error:","No spawns found!");
    } else if(creep != -4){
        //log("spawning error:", creep);
    }
    
    
};