import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, // Remove leading/trailing whitespace
            minLength: 3,
            maxLength: 30,
        }, 
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50,
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true,
        },
    },
        {
            timestamps: true, // Automatically adds createdAt and updatedAt fields
        }
);

export const User = mongoose.model("User", userSchema);