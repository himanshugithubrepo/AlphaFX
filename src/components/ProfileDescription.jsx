import React from "react";
import UtilityButton from "../utils/UtilityButton";

export default function ProfileDescription(){
    const text = "Hire Me";
    return(
        <div className="flex flex-col w-full justify-center items-start m-5">
            <h6 className="mt-1 py-1 text-3xl">Hello,My Name is</h6>
            <h1 className="mt-1 py-1 text-6xl">Himanshu Sharma</h1>
            <h2 className="mt-1 py-1 text-3xl">SDE Intern | MERN Stack Developer  <span><br/>ML Enthusiast</span> <br></br></h2>
            <UtilityButton text={text}/>
        </div>
    )
}
