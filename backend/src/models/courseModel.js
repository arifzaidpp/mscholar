import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ageRangeStart: { type: Number, required: true },
    ageRangeEnd: { type: Number, required: true },
    sector: { type: String, required: true },
    enrollmentLink: { type: String, required: true },
    gender: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
});

const Course = mongoose.model('Course', courseSchema);

export default Course;