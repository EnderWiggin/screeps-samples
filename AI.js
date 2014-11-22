var combat = require('combat');
var worker = require('worker');

module.exports = {
    builder   : worker.builder,
    harvester : worker.harvester,
    miner     : worker.miner,
    hauler    : worker.hauler,
    scavenger : worker.scavenger,
    healer    : combat.healer,
    guard     : combat.guard,
};