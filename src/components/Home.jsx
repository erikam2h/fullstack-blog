import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container m-auto min-h-screen py-10">
        <h1 className="text-5xl text-center text-green-950 font-light mb-10">
          Discover the last blogs
        </h1>
        <p className="text-xl text-green-700 font-bold">Post list</p>
      </div>
    </>
  );
}
