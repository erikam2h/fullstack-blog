import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewPost() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!form.title || !form.content || !form.author || !form.content) {
      alert("All fields need to be filled in");
      return;
    }

    try {
      const response = await fetch(
        "https://blogs-api-s835.onrender.com/API/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        alert("Post created successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-2xl w-[400px] mt-[-10%]">
        <p className="text-4xl font-bold mb-4 text-center p-10">
          Create Your New Post
        </p>

        <div className="space-y-6">
          <input
            className="border-gray-300 border rounded-lg w-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />

          <input
            type="text"
            className="border-gray-300 border rounded-lg w-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            className="border-gray-300 border rounded-lg w-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />

          <input
            className="border-gray-300 border rounded-lg w-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Cover"
            value={form.cover}
            onChange={(e) => setForm({ ...form, cover: e.target.value })}
          />

          <div className="flex justify-center mt-2">
            <button
              onClick={handleSubmit}
              className="border-2 p-1 rounded-lg w-20 bg-blue-500  text-white hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
            <Link to="/">
              <button className="border-2 p-1 rounded-lg w-20 bg-red-500  text-white hover:bg-red-700 transition-colors">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { Link, useNavigate, Form } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function NewPost() {
//   const [newPost, setNewPost] = useState({
//     author: "",
//     title: "",
//     content: "",
//     cover: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost((prevPost) => ({
//       ...prevPost,
//       [name]: value,
//     }));
//   };

//   const handleCreate = (e) => {
//     e.preventDefault();
//     axios
//       .post(`https://blogs-api-s835.onrender.com/API/posts/`, newPost)
//       .then((res) => {
//         navigate(`/posts/${res.data.result.id}`);
//         // console.log(res.data.result.id);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <div className=" flex justify-center  m-auto min-h-screen py-10 max-w-lg  items-center">
//         <form
//           onSubmit={handleCreate}
//           className="flex flex-col flex-1 bg-white  px-8 pt-8 pb-4  shadow appearance-none border rounded  leading-tight"
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-xl font-bold mb-2"
//               htmlFor="author"
//             >
//               Author
//             </label>
//             <input
//               required
//               type="text"
//               id="author"
//               name="author"
//               placeholder="Write an Author Name Here!"
//               onChange={handleChange}
//               className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-xl font-bold mb-2"
//               htmlFor="title"
//             >
//               Title
//             </label>
//             <input
//               required
//               type="text"
//               id="title"
//               name="title"
//               placeholder="Write the Title Name Here!"
//               onChange={handleChange}
//               className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-xl font-bold mb-2"
//               htmlFor="content"
//             >
//               Content
//             </label>
//             <textarea
//               required
//               id="content"
//               name="content"
//               placeholder="Write the Content Name Here!"
//               onChange={handleChange}
//               className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-xl font-bold mb-2"
//               htmlFor="cover"
//             >
//               Cover Photo
//             </label>
//             <input
//               required
//               type="url"
//               id="cover"
//               name="cover"
//               placeholder="Update Cover Photo URL Here!"
//               onChange={handleChange}
//               className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex gap-6">
//             <button
//               type="submit"
//               className="font-bold btn btn-primary flex-1 w-full text-xl"
//             >
//               Create
//             </button>
//             <Link to="/" className="flex-1">
//               <button className="font-bold btn btn-error w-full text-xl">
//                 Cancel
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
