const { Schema, model } = require('mongoose');

cponst SmallGroupSchema = new Schema(
    {
        smGroupName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        location: {
            type: String,
            required: true
        },
        short_description: {
            type: String,
            required: true
        },
        description: {
            type: TEXT,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

const SmallGroup = model('SmallGroup', SmallGroupSchema);

module.exports = SmallGroup;