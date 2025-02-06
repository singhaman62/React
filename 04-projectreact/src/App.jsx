import { useState } from "react"



function App() {
  const [color,setcolor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <h1 className="font-extrabold text-center text-white text-5xl">Welcome to bgchanger</h1>
    <h2 className="font-bold text-center text-white text-3xl">Color is:</h2>
    <h3 className="font-semibold text-center text-white text-2xl">{color.toUpperCase()}</h3>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl hover:bg-pink-900">
        <button onClick={()=>setcolor("red")} 
        className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor:"red"}}>
          Red
          </button>
        {/* red done   */}
        <button onClick={()=>setcolor("purple")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor:"purple"}}>
          Purple
          </button>
          {/* green done */}
      <button onClick={()=>setcolor("black")}className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor:"black"}}>
          Black
          </button>
          {/* blue */}
          <button onClick={()=>setcolor("blue")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor:"blue"}}>
          Blue
          </button>
          {/* pink */}
          <button onClick={()=>setcolor("orange")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor:"orange"}}>
          Orange
          </button>
      </div>
    </div>
   </div>
  )
}

export default App
