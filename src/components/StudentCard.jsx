



function StudentCard(){


    return(
        <>
            <div className="max-w-sm p-6 bg-white rounded-xl shadow-md border border-gray-100 text-center">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Akshay R</h1>
                </div>
                <div>
                    <p className="text-sm text-gray-500 mt-1 mb-4">Python Full Stack Developer</p>
                </div>
                <div>
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                        View Profile
                    </button>
                </div>
            </div>
        </>
    )
}

export default StudentCard;