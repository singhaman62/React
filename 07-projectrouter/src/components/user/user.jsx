import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const{userid}=useParams()
    return(
        <div className="bg-gray-800 text-center text-white font-bold text-3xl">user:{userid}</div>
    )
}
export default User