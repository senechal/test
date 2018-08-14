import mongoose from 'mongoose';


const FriendsSchema = new mongoose.Schema({
  name: String,
  starred: Boolean,
  sex: String,
});


export default mongoose.model('Friend', FriendsSchema);
