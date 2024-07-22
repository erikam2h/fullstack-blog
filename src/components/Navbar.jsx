import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="w-full py-1 bg-base-100 shadow">
        <div className="container m-auto flex justify-between mt-0 py-2">
          <NavLink to="/">
            <h1 className="text-3xl text-info font-bold mr-10">BlogLogo</h1>
          </NavLink>
          <ul className="md:flex items-center justify-between pt-4 md:pt-0 gap-8">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>

            <NavLink to="/posts/new">
              <li>Create post</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
