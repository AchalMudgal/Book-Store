import axios from "axios";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function CreateBook() {
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const [publishYear, setPublisherYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {title,auther,publishYear};
    setLoading(true);
    axios.post("http://localhost:7000/api/v1/addBook",data).then(()=>{
      setLoading(false);
      navigate('/');
    }).catch((error)=>{
      setLoading(false)
      alert("An error happend. Please check console");
      console.log(error);
    })
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading? <Spinner/>:''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Auther</label>
          <input type="text" value={auther} onChange={(e)=>setAuther(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input type="text" value={publishYear} onChange={(e)=>setPublisherYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook