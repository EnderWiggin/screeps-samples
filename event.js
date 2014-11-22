//important messages to be stored in memory for later review, probably not very useful until multiplayer with offline play implemented
module.exports = function () {
    var events = Memory.events;
    if(events === null || events === undefined){
      events = Memory.events = [];
    }
    
    var msg = "["+Game.time+"]";
    for(var i in arguments){
       msg += " " + arguments[i];
    }
    console.log(msg);
    events.push(msg);
    if(events.length > 10){
      events.shift();
    }
}