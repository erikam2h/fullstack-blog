import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import loader from "../assets/loader.gif";
import imageNotFound from "../assets/imageNotFound.png";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [serverState, setServerState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://blogs-api-s835.onrender.com/API/posts/${id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.length === 0) {
          setPost(res.data);
          setServerState(false);
        } else {
          setPost(res.data);
          setServerState(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`https://blogs-api-s835.onrender.com/API/posts/${id}`)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return serverState ? (
    <>
      <div className="flex flex-col gap-y-10 items-center   py-10">
        <h1 className="text-3xl text-center text-accent font-bold capitalize">
          {post.title}
        </h1>
        <div className="max-w-screen-md bg-white m-auto   pb-6 rounded-xl">
          <figure className="drop-shadow-lg mb-4 ">
            <img
              src={post.cover}
              alt={post.title}
              className="rounded-tr-xl rounded-tl-xl"
              onError={(e) => {
                e.target.src = `${imageNotFound}`;
              }}
            />
          </figure>

          <div className="flex justify-between items-center mb-6 px-8">
            <div className="badge badge-secondary  text-lg py-3 px-4">
              {post.author}
            </div>
            <h3 className="text-gray-400 font-bold">
              {new Date(post.createdAt).toDateString()}
            </h3>
          </div>
          <p className="text-justify px-8"> {post.content} </p>
          <hr className="my-10" />
          <div className="flex justify-between mt-4 gap-x-10 px-8">
            <Link to="/" className="flex-1">
              <button className="font-bold btn w-full text-lg">
                Go back Home
              </button>
            </Link>
            <Link to={`/posts/edit/${post.id}`} className="flex-1">
              <button className="font-bold btn btn-accent w-full text-lg">
                Edit
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="font-bold btn btn-error flex-1 w-full text-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex gap-y-10 items-center justify-center   py-10">
        <div className=" flex items-center justify-center    min-h-screen text-center ">
          <img src={loader} alt="loader icon" />
        </div>
      </div>
    </>
  );
}
