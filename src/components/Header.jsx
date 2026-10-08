

function Header({setData}){
    

   function HandleData(){
    setData("Child Data")
   }


   return(
    <>
           <button
               onClick={HandleData}
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-150"
           >
               Share Data
           </button>
    </>
   )


}


export default Header;