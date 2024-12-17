import Course from '../models/courseModel.js'; // Import your course model
import User from '../models/userModel.js'; // Import your user model

// Add a new course
export const addCourse = async (req, res) => {
    console.log(req.body);
    
    const { title, ageRangeStart, ageRangeEnd, faction, mode, gender, courseProvider, enrollmentLink, description, contactEmail, contactPhone } = req.body;
    
    // Check if required fields are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'All required fields must be filled' });
    }

    try {
        const newCourse = new Course({
            title,
            ageRangeStart,
            ageRangeEnd,
            gender,
            faction,
            mode,
            courseProvider,
            enrollmentLink,
            description,
            contactEmail,
            contactPhone
        });

        await newCourse.save();
        return res.status(201).json({ message: 'Course created successfully', newCourse });
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ error: 'Error creating course' });
    }
};

// Get all courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find(); // Retrieve all courses from the database
        return res.status(200).json({ courses }); // Return the list of courses
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching courses' });
    }
};

// Edit an existing course
export const editCourse = async (req, res) => {
    
    const { id } = req.params;
    console.log(req.body);
    console.log(req.params);
    
    
    const { title, ageRangeStart, ageRangeEnd, faction, mode, gender, courseProvider, enrollmentLink, description, contactEmail, contactPhone } = req.body;

    // Check if required fields are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'All required fields must be filled' });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            {
                title,
                ageRangeStart,
                ageRangeEnd,
                faction,
                gender,
                mode,
                courseProvider,
                enrollmentLink,
                description,
                contactEmail,
                contactPhone
            },
            { new: true } // Return the updated document
        );

        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }

        
        return res.status(200).json({ message: 'Course updated successfully', updatedCourse });
    } catch (error) {
        return res.status(500).json({ error: 'Error updating course' });
    }
};

// Delete an course
export const deleteCourse = async (req, res) => {
    console.log(req.params);
    
    const { id } = req.params;

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }

        return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting course' });
    }
};

// getAllUsers
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        return res.status(200).json({ users }); // Return the list of users
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching users' });
    }
};