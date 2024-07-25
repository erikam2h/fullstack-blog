import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";
import EditPost from "./components/EditPost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
