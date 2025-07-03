const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.body);
    res.json({students});
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const message = await addNewStudent(req.body);

    res.json(message);    
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const message = await updateStudent(req.body);
    res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const message = await getStudentDetail(id);

    res.json(message); 
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    const message = await setStudentStatus(
        { userId: id, reviewerId: null, status }
    );

    res.json(message);
});

module.exports = {
    handleGetAllStudents, // done
    handleGetStudentDetail, // done
    handleAddStudent, // done
    handleStudentStatus, // done
    handleUpdateStudent, // done
};
