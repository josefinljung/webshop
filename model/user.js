const mongoose          = require("mongoose");
const Schema            = require("mongoose").Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    address: String,
    zipcode: Number,
    city: String,
    resetToken: String,
    expirationToken: Date,
    wishlist: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    }]
})

userSchema.methods.addToWishlist = function (product) {
    this.wishlist.push({
        productId: product._id
    })
    const newWishlist = this.wishlist.filter(function ({
        productId
    }) {
        return !this.has(`${productId}`) && this.add(`${productId}`)

    }, new Set)
    this.wishlist = [...newWishlist]
    return this.save()
}

userSchema.methods.removeFromList = function (productId) {
    const remainingWishlistProducts = this.wishlist.filter((product) => {
        return product.productId.toString() !==
            productId.toString()
    })
    this.wishlist = remainingWishlistProducts;
    return this.save()
};


const User = mongoose.model("User", userSchema)

module.exports = User;