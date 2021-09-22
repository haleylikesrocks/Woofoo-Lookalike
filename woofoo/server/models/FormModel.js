const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let FormSchema = new Schema({
    currentFields: { type: Array, required: true},
    formId: { type: String, required: true},
    name: {type: String, required: true}
})

module.exports = mongoose.model('SavedForm', FormSchema);