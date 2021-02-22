var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema(
    {
        name: { type: String, required: true, mixlength: 3, maxlength: 100 }
    }
)

//Set up virtual of genre
genreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

module.exports = mongoose.model('Genre', genreSchema);
