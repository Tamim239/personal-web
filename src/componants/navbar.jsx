export default function Navbar() {
  return (
    <div className="w-4/5 mx-auto py-5">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1]  shadow bg-red-100 rounded-box w-52"
            >
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Works</a>
              </li>
              <li>
                <a href="">Resume</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-semibold">
            Talk<span className="text-[#7A47E0]">IFY</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[1.1rem]">
            <li className="">
              <a href="" className="border-b-2 border-[#7A47E0]">Services </a>
            </li>
            <li>
              <a href="" className="hover:border-b-2 border-[#7A47E0]">Works</a>
            </li>
            <li>
              <a href="" className="hover:border-b-2 border-[#7A47E0]">Resume</a>
            </li>
            <li>
              <a href="" className="hover:border-b-2 border-[#7A47E0]">Skills</a>
            </li>
            <li>
              <a href="" className="hover:border-b-2 border-[#7A47E0]">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="max-sm:navbar-end">
          <a className=" btn text-xl text-white rounded-3xl px-5 py-2 text-center border-0 bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
            Hire Me!
          </a>
        </div>
      </div>
    </div>
  );
}
