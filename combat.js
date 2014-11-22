var filter = require("filter");

module.exports = {
    guard  : guardAI,
    healer : healerAI
};

function guardAI(creep) {
    var target = getTarget(creep);
    var inRange = target && target.pos.inRangeTo(creep.pos, 3);
    var inMelee = target && target.pos.isNearTo(creep);
    var canRange = creep.getActiveBodyparts(Game.RANGED_ATTACK);
    var canMelee = creep.getActiveBodyparts(Game.ATTACK);
    var canMove = !creep.fatigue && creep.getActiveBodyparts(Game.MOVE);
    
    var actions = {};
    
    if(target){
        if(canRange){
            if(inRange){
                actions.ranged = ranged;
            } else if(canMove){
                actions.move = move;
            }
        }
        
        if(canMelee){
            if(inMelee){
                actions.melee = melee;
            } else if(canMove){
                actions.move = move;
            }
        }
    } else {
        target = creep.pos.findNearest(Game.MY_SPAWNS);
        if(target && !creep.pos.inRangeTo(target, 5)){
             actions.move = move;
        }
    }
    
    for(var action in actions){
        actions[action](creep, target);
    }
}

function healerAI(creep){
    var canHeal = creep.getActiveBodyparts(Game.HEAL);
    var target = creep.pos.findNearest(Game.MY_CREEPS, filter.damaged);
    if(target && canHeal){
        if(creep.pos.isNearTo(target)){
            creep.heal(target);
        } else {
            creep.moveTo(target);
        }
    } else {
        var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
        if(!creep.pos.inRangeTo(spawn, 3)){
            creep.moveTo(spawn);
        }
    }
}

function ranged(creep, target){
    creep.rangedAttack(target);
}

function melee(creep, target){
    creep.attack(target);
}

function move(creep, target){
    creep.moveTo(target);
}

function getTarget(creep) {
    return creep.pos.findNearest(Game.HOSTILE_CREEPS);
}