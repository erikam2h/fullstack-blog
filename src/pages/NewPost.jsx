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
    <>
      <div className="flex flex-col min-h-screen  gap-y-10 items-center py-10">
        <div
          className="max-w-screen-md bg-base-100 m-auto pb-6 rounded-xl shadow
leading-tight"
        >
          <div className="card-body items-center text-center">
            <p className="text-4xl font-bold mb-4 text-center p-8">
              Create Your New Post
            </p>
            <div className="space-y-6">
              <input
                className="border-base-300 border text-xl rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                type="text"
                placeholder="Author"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />

              <input
                type="text"
                className="border-base-300 border text-xl rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <textarea
                className="border-base-300 border text-xl rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                type="text"
                placeholder="Content"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              ></textarea>

              <input
                className="border-base-300 border text-xl rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:-ring-accent"
                type="text"
                placeholder="Cover"
                value={form.cover}
                onChange={(e) => setForm({ ...form, cover: e.target.value })}
              />
            </div>
            <div className="card-actions justify-end mt-6">
              <button
                onClick={handleSubmit}
                className="font-bold btn btn-accent text-lg"
              >
                Submit
              </button>
              <Link to="/">
                <button className="font-bold btn btn-error flex-1 text-lg">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
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
