import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import CardPost from "../components/CardPost";
import loader from "../assets/loader.gif";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [serverState, setServerState] = useState(false);
  const [limit, setLimit] = useState(50);
  const [inputLimit, setInputLimit] = useState(null);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://blogs-api-1rx2.onrender.com/API/posts?limit=${limit}`)
      .then((res) => {
        // console.log(res.data);

        if (res.data.length === 0) {
          setPosts(res.data);
          setServerState(false);
        } else {
          setPosts(res.data);
          setServerState(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);

  const handleInputChange = (e) => {
    setInputLimit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLimit(Number(inputLimit));
  };

  return serverState ? (
    <>
      <Hero />
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="number"
            value={inputLimit}
            onChange={handleInputChange}
            className="px-4 py-2 border border-slate-400 rounded text-2xl focus:border-pink-500 outline-none focus:outline-none"
            min="1"
          />
          <button
            type="submit"
            className="font-bold btn btn-secondary text-xl  "
          >
            Set Posts Limit
          </button>
        </form>
      </div>

      <div className="container m-auto min-h-screen py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {posts.map((p) => (
            <CardPost key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <Hero />
      <div className="container m-auto min-h-screen py-12">
        <div className="flex flex-col items-center justify-center    min-h-screen text-center">
          <img src={loader} alt="loader icon" />
        </div>
      </div>
    </>
  );
}
