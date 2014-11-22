module.exports = {
    role:function (role){ return {filter:function(creep){ return creep.memory.role === role; }}; },
    damaged:{filter:function (creep){ return creep.hits < creep.hitsMax; }}
};