import mongoose, { mongo } from 'mongoose';
import validator from 'validator';
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLenth: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLenth: 3,
    maxLength: 20,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLenth: 6,

    trim: true,
  },
  lastName: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    maxLength: 20,
    default: 'India',
  },
});

export default mongoose.model('User', UserSchema);
