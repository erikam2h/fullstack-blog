export default function NewPost() {
  return (
    <>
      <div className="container m-auto min-h-screen py-10">
        <p className="text-xl text-green-500 font-bold">Form for new post</p>
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
