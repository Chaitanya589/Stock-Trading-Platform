const {model} = require("mongoose");
const { PositionsSchema } = require("../Schema/PositionsSchema");

const PositionsModel = new model("order",PositionsSchema);

module.exports = {PositionsModel};