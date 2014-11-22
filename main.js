var log = require('log');
var plan = require('planner');
var AI = require('AI');

plan();

for(var name in Game.creeps) {
	var creep = Game.creeps[name];
    AI[creep.memory.role](creep);
}