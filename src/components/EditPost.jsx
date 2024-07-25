import { useParams, Link, useNavigate, Form } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditPost() {
  const { id } = useParams();
  const [postEdit, setPostEdit] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/API/posts/${id}`)
      .then((res) => {
        setPostEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostEdit((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/API/posts/${id}`, postEdit)
      .then((res) => {
        navigate(`/posts/${id}`);
        console.log("Resource updated successfully", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" flex justify-center  m-auto min-h-screen py-10 max-w-lg  items-center">
        <form
          onSubmit={handleEdit}
          className="flex flex-col flex-1 bg-white   px-8 pt-8 pb-4  shadow appearance-none border rounded  leading-tight"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              required
              type="text"
              id="author"
              name="author"
              value={postEdit.author}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              value={postEdit.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              required
              id="content"
              name="content"
              value={postEdit.content}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cover"
            >
              Cover Photo
            </label>
            <input
              type="text"
              id="cover"
              name="cover"
              placeholder="Update Cover Photo URL Here!"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex gap-6">
            <button type="submit" className="font-bold btn btn-primary">
              Update
            </button>
            <Link to={`/posts/${id}`}>
              <button className="font-bold btn btn-error">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
