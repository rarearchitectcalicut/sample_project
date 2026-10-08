


function HoverBox() {
    
    

    const handleMouseEnter = () => {
        console.log("Mouse Entered")
        
    };
    const handleMouseLeave = () => {
        console.log("Mouse Leaved")
      
    };

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group bg-black w-40 h-40 flex items-center justify-center rounded-2xl shadow-2xs hover:bg-amber-300 transition-colors duration-300"
            >
                <h1 className="text-white font-bold group-hover:text-2xl group-hover:text-black transition-all duration-1000">
                    Hover Box
                </h1>
            </div>
        </>
    );
}

export default HoverBox;