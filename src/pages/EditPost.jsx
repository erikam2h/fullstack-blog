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
      .get(`https://blogs-api-s835.onrender.com/API/posts/${id}`)
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
      .put(`https://blogs-api-s835.onrender.com/API/posts/${id}`, postEdit)
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
      <div className=" flex justify-center max-w-screen-md  m-auto min-h-screen   items-center">
        <form
          onSubmit={handleEdit}
          className="flex flex-col flex-1 bg-base-100  px-8 pt-8 pb-14  shadow appearance-none rounded-xl leading-tight"
        >
          <p className="text-4xl font-bold mb-4 text-center p-8">
            Edit Your Post
          </p>
          <div className="mb-4">
            <label
              className="block text-xl text-base-content  font-bold mb-2"
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
              className="shadow border-base-300  focus:ring-2 focus:-ring-accent text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-xl text-base-content font-bold mb-2"
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
              className="shadow border-base-300 focus:ring-2 focus:-ring-accent text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-xl text-base-content  font-bold mb-2"
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
              className="shadow border-base-300  focus:ring-2 focus:-ring-accent text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-xl text-base-content  font-bold mb-2"
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
              className="shadow border-base-300  focus:ring-2 focus:-ring-accent text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <button
              type="submit"
              className="font-bold btn btn-primary text-xl w-full flex-1"
            >
              Update
            </button>
            <Link to={`/posts/${id}`} className="flex-1">
              <button className="font-bold btn btn-error text-xl w-full ">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
