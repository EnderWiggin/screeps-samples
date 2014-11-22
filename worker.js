var filter = require("filter");

module.exports = {
    builder   : builder,
    harvester : harvester,
    miner     : miner,
    hauler    : hauler,
    carrier   : carrier,
};

function builder(creep) {
    if(creep.energy === 0) {
		var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
        creep.moveTo(spawn);
		spawn.transferEnergy(creep);
	} else {
		var site = creep.pos.findNearest(Game.CONSTRUCTION_SITES);
		if(site) {
			creep.moveTo(site);
			creep.build(site);
		}
	}
}

function harvester(creep) {
	if(creep.energy < creep.energyCapacity) {
		var nearest_resource = creep.pos.findNearest(Game.SOURCES);
		creep.moveTo(nearest_resource);
		creep.harvest(nearest_resource);
	} else {
		var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
		creep.moveTo(spawn);
		creep.transferEnergy(spawn);
	}
}

function miner(creep) {
	if(creep.energy < creep.energyCapacity) {
		var source = creep.pos.findNearest(Game.SOURCES);
		creep.moveTo(source);
		creep.harvest(source);
	}
}

function hauler(creep){
	var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
    if(creep.energy < creep.energyCapacity) {
		var source = creep.pos.findNearest(Game.DROPPED_ENERGY);
		if(source){
    		creep.moveTo(source);
    		creep.pickup(source);
		} else {
            creep.moveTo(spawn);
	        creep.transferEnergy(spawn);
        }
    } else {
        creep.moveTo(spawn);
	    creep.transferEnergy(spawn);
    }
}

function carrier(creep){
	var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
	var miner = creep.pos.findNearest(Game.MY_CREEPS, filter.role("miner"));
	//log(creep.energy,creep.energyCapacity,miner, spawn);
    if((creep.energy === 0) && miner) {
		creep.moveTo(miner);
		miner.transferEnergy(creep);
    } else {
        creep.moveTo(spawn);
	    creep.transferEnergy(spawn);
    }
}