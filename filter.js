module.exports = {
    role:function (role){ return {filter : {memory : {role : role}}}; },
    damaged:{filter:function (creep){ return creep.hits < creep.hitsMax; }}
};