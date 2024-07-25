import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/API/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:5000/API/posts/${id}`)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="max-w-screen-md m-auto min-h-screen py-10">
        <h1 className="text-3xl text-center text-accent font-bold capitalize">
          {post.title}
        </h1>
        <figure className="drop-shadow-lg my-10 ">
          <img src={post.cover} alt={post.title} className="rounded-xl" />
        </figure>

        <div className="flex justify-between mb-6">
          <div className="badge badge-secondary">{post.author}</div>
          <h3 className="text-gray-400 font-bold">
            {new Date(post.createdAt).toDateString()}
          </h3>
        </div>
        <p className="text-justify"> {post.content} </p>
        <hr className="my-10" />
        <div className="flex justify-end mt-4 gap-x-10">
          <Link to="/">
            <button className="font-bold btn">Go back Home</button>
          </Link>
          <Link to={`/posts/edit/${post.id}`}>
            <button className="font-bold btn btn-accent">Edit</button>
          </Link>
          <button onClick={handleDelete} className="font-bold btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
