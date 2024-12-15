import express from 'express';
import passport from 'passport';
import {
  registerUser,
  loginUser,
  logout,
  getUserProfile,
  handleGoogleCallback,
} from '../controllers/authController.js';
import { isAuthenticatedUser } from '../middleware/auth.js';
import upload from '../utils/multer.js';

const router = express.Router();

// Google OAuth routes
router.get('/google/login',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    state: 'login'
  })
);

router.get('/google/signup',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    state: 'signup'
  })
);

router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: '/login',
    session: false
  }),
  handleGoogleCallback
);

// Traditional auth routes
router.post('/register', upload.single('avatar'), registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);
router.get('/me', isAuthenticatedUser, getUserProfile);

export default router;