import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        shortID: {
            type: String,
            required: true,
            unique: true,
        },
        redirectURL: {
            type: String,
            required: true,
        },
        visitHistory: [{ timestamp: { type: Number } }],
    },
    { timestamps: true }
);

const URLmodel = mongoose.model("URL", userSchema);

export default URLmodel;