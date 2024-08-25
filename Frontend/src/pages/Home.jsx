import axios from "axios";
import { useEffect,useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit} from "react-icons/ai";
import { BsInfoCircle} from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete} from "react-icons/md";



function Home() {

  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    axios.get("http://localhost:7000/api/v1/getBooks")
    .then((res)=>{
      console.log(res.data.data,"Books");
      setBooks(res.data.data);
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[])
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to='/book/create'>
         <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ):(
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <td className="border border-slate-600 rounded-md text-center">No</td>
              <td className="border border-slate-600 rounded-md text-center">Title</td>
              <td className="border border-slate-600 rounded-md text-center max-md:hidden">Auther</td>
              <td className="border border-slate-600 rounded-md text-center max-md:hidden">Publish Year</td>
              <td className="border border-slate-600 rounded-md text-center">Operations</td>
            </tr>
          </thead>
          <tbody>
            {books.map((book,index)=>(
              <tr key={book._id}>
                <td className="border border-slate-700 rounded-md text-center">{index+1}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.auther}</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/book/details/${book._id}`}>
                     <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                     <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                     <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home