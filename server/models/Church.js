const { Schema, model } = require('mongoose');

const churchSchema = new Schema(
    {
        churchName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        location: {
            type: String,
            required: true,
            unique: true
        },
        denomination: {
            type: String,
            required: true,
            unique: false
        },
        mission: {
            type: TEXT,
            required: true,
        },
        churchId: {
            type: String,
            required: true
        }
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

const Church = model('Church', churchSchema);

module.exports = Church;