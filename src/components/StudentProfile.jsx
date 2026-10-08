
import { useState } from "react";

function StudentProfile(){

    const[deleteModal,setDeleteModal] = useState(false);
    const[studentId,setStudentId] = useState("");
    

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Akshay R",
            email: "akshaysachu727@gmail.com",
            course: "Python Full Stack Developer"
        },
        {
            id: 2,
            name: "Priya Sharma",
            email: "priya.sharma@example.com",
            course: "Data Analytics"
        },
        {
            id: 3,
            name: "Rahul Verma",
            email: "rahul.v@example.com",
            course: "UI/UX Design"
        },
        {
            id: 4,
            name: "Ananya Nair",
            email: "ananya.n@example.com",
            course: "Java Full Stack Developer"
        }
    ]);


    const handleDelete = async (id) => {
        try{
        setStudents(prevStudents => {
            return prevStudents.filter(student => student.id !== id)   
        })
    }catch(error){
        console.log(error)
        
    }
    }


    

    return(
        <>

        {students.length == 0 ? (
             <div>
                 <p className="text-black text-2xl">No Students Available</p>
             </div>

        ):
        
            <div className="flex flex-wrap items-center justify-center gap-6 p-6">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="card flex flex-col items-center justify-center text-center max-w-sm w-full p-6 bg-white rounded-2xl shadow-2xl gap-4"
                    >
                        {/* Header Section */}
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                                {student.name}
                            </h1>
                        </div>

                        {/* Info Section */}
                        <div className="flex flex-col items-center gap-1 text-sm text-gray-600">
                            <p>
                                <span className="font-semibold text-gray-700">Email:</span>{" "}
                                {student.email}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-700">Course:</span>{" "}
                                {student.course}
                            </p>
                        </div>

                        {/* Action Section */}
                        <div className="w-full pt-2 flex flex-col gap-3">
                            <button className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20">
                                View Profile
                            </button>
                            <button
                                onClick={() => {setDeleteModal(true)
                                setStudentId(student.id)
                                }}
                                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-150 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-800"
                            >
                                Delete Student
                            </button>
                            {deleteModal && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black/50">

                                    <div className="rounded-xl bg-white p-6 shadow-xl">

                                        <h2 className="text-lg font-semibold text-black">
                                            Delete Student?
                                        </h2>

                                        <p className="mt-2 text-gray-600">
                                            Are you sure you want to delete this student?
                                        </p>

                                        <div className="mt-6 flex gap-3 justify-center">

                                            <button
                                                onClick={() => setDeleteModal(false)}
                                                className="rounded-lg text-black shadow-2xs px-4 py-2 bg-yellow-300 hover:bg-yellow-500 hover:cursor-pointer transition-colors duration-500"
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                onClick={() => {
                                                    handleDelete(studentId)
                                                    setDeleteModal(false)
                                                }}
                                                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700 hover:cursor-pointer transition-colors duration-500"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            )}
                        </div>
                        
                    </div>
                ))}
            </div>

        }
        </>
    )
};

export default StudentProfile;