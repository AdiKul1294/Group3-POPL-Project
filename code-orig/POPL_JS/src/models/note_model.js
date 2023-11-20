let mongoose = require("mongoose");

const user = "adikul3007";
const password = "popl1294";

mongoose.connect(`mongodb+srv://${user}:${password}@rest-api.lbyvfkv.mongodb.net/`);

let NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
});

module.exports = mongoose.model("Note", NoteSchema);
