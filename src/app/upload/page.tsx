"use client";
import { CldUploadWidget } from "next-cloudinary"

export default function UploadPage(){
    return(<>
    <CldUploadWidget uploadPreset="ramnarayansah">
        {({open})=> <button className="btn btn-primary" onClick={()=> open()}>Upload</button>}
    </CldUploadWidget>
    </>)
}