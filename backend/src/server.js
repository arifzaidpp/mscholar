import path from "path";
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import rateLimit from 'express-rate-limit';
import connectDatabase from './config/database.js';
import errorMiddleware from './middleware/error.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import passport from './config/passport.js';

// Load env vars
dotenv.config();

const __dirname = path.resolve();


// Connect to database
connectDatabase();

const app = express();

// Security
// app.use(helmet());
// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' 
//     ? 'https://mschloar.onrender.com/' :
//     'http://localhost:3000',
//   credentials: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   allowedHeaders: 'Content-Type,Authorization',
//   credentials: true,
// }));

app.use(express.static(path.join(__dirname.replace('/backend', ''),"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname.replace('/backend', ''), "frontend", "dist", "index.html"))
})

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https://res.cloudinary.com; frame-src 'self' https://www.youtube.com; script-src 'self' 'unsafe-eval';"
  );
  next();
});


// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Session middleware (before passport)
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api', limiter);

// Routes
app.use('/api/v1/auth', authRoutes);

app.use("/api/v1/admin", adminRoutes);

app.use('/api/v1/user', userRoutes);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});