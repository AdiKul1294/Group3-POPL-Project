let mongoose = require("mongoose");

const user = "adikul3007";
const password = "popl1294";

mongoose.connect(`mongodb+srv://${user}:${password}@rest-api.lbyvfkv.mongodb.net/`);

let UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
});

module.exports = mongoose.model("User", UserSchema);
