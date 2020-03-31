const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: String,
	price: Number,
	description: String,
	quantity: Number,
	country: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
});

const productItem = mongoose.model("Product", schema);

module.exports = productItem;