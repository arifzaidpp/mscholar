import Course from '../models/courseModel.js'; // Import your course model

// Add a new course
export const addCourse = async (req, res) => {
    console.log(req.body);
    
    const { title, ageRangeStart, ageRangeEnd, sector, gender, enrollmentLink, description, contactEmail, contactPhone } = req.body;
    
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
            sector,
            enrollmentLink,
            description,
            contactEmail,
            contactPhone
        });

        await newCourse.save();
        return res.status(201).json({ message: 'Course created successfully', newCourse });
    } catch (error) {
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
    const { course, institution, year, status } = req.body;

    // Check if required fields are provided
    if (!course || !institution || !year ) {
        return res.status(400).json({ error: 'All required fields must be filled' });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            {
                course,
                institution,
                year,
                status
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
