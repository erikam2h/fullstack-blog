import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import CardPost from "../components/CardPost";
import loader from "../assets/loader.gif";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [serverState, setServerState] = useState(false);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://blogs-api-s835.onrender.com/API/posts`)
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
  }, []);
  return serverState ? (
    <>
      <Hero />
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
