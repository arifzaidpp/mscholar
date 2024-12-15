import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ageRangeStart: { type: Number, },
    ageRangeEnd: { type: Number, },
    sector: { type: String,  },
    mode: { type: String, },
    enrollmentLink: { type: String,},
    gender: { type: String, },
    contactEmail: { type: String, },
    contactPhone: { type: String, },
});

const Course = mongoose.model('Course', courseSchema);

export default Course;