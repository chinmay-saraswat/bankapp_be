const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chinmaysaraswat:0987chinmaysaraswat@cluster0.hrogdi9.mongodb.net/paytm_app");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', AccountSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    User,
    Account
};
