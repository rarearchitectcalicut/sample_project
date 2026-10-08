import { useState } from "react";



function Counter(){


    const[count,setCount] = useState(0);


    

    const increase = () => {
          setCount(count+1)
    }

    const decrease = () => {
        setCount(count-1)
        if (count < 1){
            setCount(0)
        }
    }


    return(
        <div className="flex items-center justify-between w-full max-w-md p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl shadow-black/40">
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Counter
                </span>
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    {count}
                </h1>
            </div>
           <div className="flex flex-row gap-5">
            <button 
            on
            onClick={increase}
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-2xl transition-all duration-150 ease-in-out shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer">
                +
            </button>
            <button
                onClick={decrease}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-2xl transition-all duration-150 ease-in-out shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer">
                -
            </button>
            </div>
        </div>
    )

}
export default Counter;