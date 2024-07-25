import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import CardPost from "./CardPost";

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/API/posts`)
      .then((res) => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
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
  );
}
