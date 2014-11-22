var combat = require('combat');
var worker = require('worker');

module.exports = {
    builder : worker.builder,
    harvester : worker.harvester,
    miner : worker.miner,
    scavenger : worker.scavenger,
    hauler : worker.hauler,
    guard : combat.guard,
    healer : combat.healer,
};