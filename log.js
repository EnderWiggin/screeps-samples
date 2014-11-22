module.exports = function () {
   var msg = "["+Game.time+"]";
   for(var i in arguments){
       msg += " " + arguments[i];
   }
   console.log(msg);
}