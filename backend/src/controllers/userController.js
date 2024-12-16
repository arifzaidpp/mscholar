import { uploadToCloudinary, deleteFromCloudinary } from '../config/cloudinary.js';
import User from '../models/userModel.js';

export const updateImage = async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    const user = await User.findById(req.body.userId);
    console.log(user.avatar.public_id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Delete existing image from Cloudinary if it exists
    if (user.avatar && user.avatar.public_id && user.avatar.public_id !== 'MScholar/lxszdktbp8n1htvadkdb') {
      await deleteFromCloudinary(user.avatar.public_id);
    }

    // Upload new image to Cloudinary
    const result = await uploadToCloudinary(req.file);

    // Update user's avatar in database
    user.avatar = {
      public_id: result.public_id,
      url: result.secure_url
    };
    await user.save();

    // Update user data in localStorage on client side
    res.json({
      success: true,
      message: "Profile image updated successfully",
      avatar: user.avatar
    });

  } catch (error) {
    console.error("Error in updateImage:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to update profile image",
      error: error.message 
    });
  }
};