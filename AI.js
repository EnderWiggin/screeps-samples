var combat = require('combat');
var worker = require('worker');

module.exports = {
    builder : worker.builder,
    harvester : worker.harvester,
    miner : worker.miner,
    hauler : worker.hauler,
    carrier : worker.carrier,
    guard : combat.guard,
    healer : combat.healer,
};