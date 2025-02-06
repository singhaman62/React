import { useState ,useCallback,useEffect,useRef} from "react"

function App() {
  const[len, setlen]=useState(8);
  const[numberall,setnumberall]=useState(false);
  const[charall,setcharall]=useState(false);
  const[password,setpassword]=useState("")

  const passwordgen=useCallback(()=>{
    let pass=""
    let str="ABCDWEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstyuvwxyz"
    if(numberall)
    {
      str+="0123456789"
    }
    if(charall) str+="/*-+&^%$#@!(*)"
    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass)
    },[len,numberall,charall,setpassword])

    const passwordref=useRef(null);
    const copypassword=useCallback(()=>{
     passwordref.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{passwordgen()},[len,numberall,charall,passwordgen])
  return (
    <div>
        <div className="w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-white">
          <div className="flex  justify-center">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-md bg-white text-red-500"
            placeholder="Generated password"
            readOnly
            ref={passwordref}
          /> <button onClick={copypassword}
          className="outline-none bg-blue-600 text-white font-bold  px-3 py-1 rounded-md"
        >
          Copy
        </button>
          </div>
          <div className="flex text-black font-semibold gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range" 
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e)=>{setlen(e.target.value)}}/>
              <label >Length:{len}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
              defaultChecked={numberall}
              id="numberinout"
              onChange={()=>setnumberall((prev)=>!prev)} />
              <label > Numberallowed{numberall}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
              defaultChecked={charall}
              id="charinput"
              onChange={()=>setcharall((chari)=>!chari)} />
              <label htmlFor="">Charallowed{charall}</label>
            </div>

          </div>
        </div>
    </div>
  )
}

export default App
 