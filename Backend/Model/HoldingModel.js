const {model} = require("mongoose");

const {HoldingSchema} = require("../Schema/HoldingSchema.js");

const HoldingsModel = new model("holdings",HoldingSchema);

module.exports = {HoldingsModel};