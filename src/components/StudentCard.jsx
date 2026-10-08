function StudentCard() {
    return (
        <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">

            {/* Top section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-blue-600 shadow-md">
                    AR
                </div>
            </div>

            {/* Student details */}
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    Akshay R
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Python Full Stack Developer
                </p>

                {/* Small info */}
                <div className="mt-5 flex justify-center gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        Python
                    </span>

                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                        Django
                    </span>
                </div>

                {/* Button */}
                <button className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-md">
                    View Profile
                </button>
            </div>
        </div>
    );
}

export default StudentCard;