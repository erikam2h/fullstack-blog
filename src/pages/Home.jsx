import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import CardPost from "../components/CardPost";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [serverState, setServerState] = useState(false);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/API/posts`)
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
        <div className="flex items-center justify-center    min-h-screen text-center">
          <p className="text-center font-bold text-3xl text-secondary">
            Loading...
          </p>
        </div>
      </div>
    </>
  );
}
