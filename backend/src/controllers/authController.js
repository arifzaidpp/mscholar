import User from '../models/userModel.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { uploadToCloudinary } from '../config/cloudinary.js';
import sendToken from '../utils/jwtToken.js';

// Handle Google OAuth callback => /api/v1/auth/google/callback
export const handleGoogleCallback = catchAsyncErrors(async (req, res, next) => {
  const { state } = req.query;
  const user = req.user;

  const userEmailAddress = user.emails[0].value || user.email;

  console.log('Google user:', user);
  console.log('State:', state);
  
  

  if (!user) {
    res.redirect(
      `http://localhost:3000/${state}?success=false&status=AUTH_FAILED&message=Google authentication failed`
    );
  }

  // Check if user exists
  const existingUser = await User.findOne({ email: userEmailAddress });

  console.log('Existing user:', existingUser);
  

  if (state === 'signup') {
    if (existingUser) {
      res.redirect(
        `http://localhost:3000/${state}?success=false&status=ACCOUNT_EXISTS&message=Account already exists. Please login instead.`
      );
      return;
    }

    // Create new user
    const newUser = await User.create({
      name: user.displayName,
      email: user.emails[0].value || user.email,
      password: user.id + process.env.JWT_SECRET,
      avatar: {
        public_id: `google_${user.id}`,
        url: user.photos[0].value,
      },
      googleId: user.id,
    });

    res.redirect(`http://localhost:3000/${state}?success=true&status=AUTH_SUCCESS&message=Google authentication successful&email=${userEmailAddress}&password=${user.id + process.env.JWT_SECRET}`);
    return;
  } else if (state === 'login') {
    if (!existingUser) {
      res.redirect(
        `http://localhost:3000/${state}?success=false&status=ACCOUNT_NOT_FOUND&message=No account found. Please sign up first.`
      );
      return;
    }

    // Update Google ID if not already set
    if (!existingUser.googleId) {
      existingUser.googleId = user.id;
      await existingUser.save();
    }
    res.redirect(`http://localhost:3000/${state}?success=true&status=AUTH_SUCCESS&message=Google authentication successful&email=${userEmailAddress}&password=${user.id + process.env.JWT_SECRET}`);
  return;
  }
});

// Register a user => /api/v1/auth/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      error: 'ACCOUNT_EXISTS',
      message: 'Account already exists with this email'
    });
  }

  let avatar = {
    public_id: 'v1734282841/pngwing.com_ht7dbd',
    url: 'https://res.cloudinary.com/dkykfxzpx/image/upload/v1734282841/pngwing.com_ht7dbd.png',
  };

  if (req.file) {
    const result = await uploadToCloudinary(req.file);
    avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  const user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  sendToken(user, 201, res);
});

// Login user => /api/v1/auth/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  console.log(req.body);
  

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'MISSING_CREDENTIALS',
      message: 'Please enter email & password'
    });
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'INVALID_CREDENTIALS',
      message: 'Invalid Email or Password'
    });
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return res.status(401).json({
      success: false,
      error: 'INVALID_CREDENTIALS',
      message: 'Invalid Email or Password'
    });
  }

  sendToken(user, 200, res);
});

// Logout user => /api/v1/auth/logout
export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
});

// Get currently logged in user details => /api/v1/auth/me
export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});