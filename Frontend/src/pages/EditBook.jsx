import axios from "axios";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function EditBook() {
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const [publishYear, setPublisherYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:7000/api/v1/book/${id}`)
    .then((res)=>{
      console.log(res);
      
      setTitle(res.data.data.title || "");
      setAuther(res.data.data.auther || "");
      setPublisherYear(res.data.data.publishYear || "");
      setLoading(false);
    }).catch((error)=>{
      setLoading(false);
      alert("An error happend. Please check console");
      console.log(error);
    })
  },[])
  const handleEditBook = () => {
    const data = {title,auther,publishYear};
    setLoading(true);
    axios.put(`http://localhost:7000/api/v1/book/${id}`,data).then(()=>{
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
      <h1 className="text-3xl my-4">Edit Book</h1>
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
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook