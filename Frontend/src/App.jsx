import { Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import CreateBook from "./pages/createBook";
import DeleteBook from "./pages/deleteBook";
import EditBook from "./pages/editBook";
import ShowBooks from "./pages/showBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/book/create" element={<CreateBook/>} />
      <Route path="/book/delete/:id" element={<DeleteBook/>} />
      <Route path="/book/edit/:id" element={<EditBook/>} />
      <Route path="/book/details/:id" element={<ShowBooks/>} />
    </Routes>
  )
}

export default App
