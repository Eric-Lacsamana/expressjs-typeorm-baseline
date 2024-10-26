import mongoose from  'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // minimum length for the password
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;