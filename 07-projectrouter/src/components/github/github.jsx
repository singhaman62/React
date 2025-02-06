import React, { useEffect, useState } from "react";

function Github(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/singhaman62')
        .then(response=>response.json())
        .then(data=>{console.log(data);
            setData(data);
        })
    },[])
    return(
        <div className="text-center text-white font-bold text-3xl bg-gray-900">Github:{data.followers}
        <img src={data.avatar_url} alt="Git picture" width={250} /></div>
    )
}
export default Github;