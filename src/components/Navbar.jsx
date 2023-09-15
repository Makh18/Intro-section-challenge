import calendar from "../assets/icon-calendar.svg";
import todo from "../assets/icon-todo.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li tabIndex={0}>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li><a><img src={todo} />Todo list</a></li>
            <li><a><img src={calendar} />Calender</a></li>
            <li><a><img src={reminders} />Reminders</a></li>
            <li><a><img src={planning} />Planing</a></li>

          </ul>
        </details>
      </li>
      <li tabIndex={1} className="'">
        <details>
          <summary>Company</summary>
          <ul className="p-2">
            <li><a>History</a></li>
            <li><a>Our Team </a></li>
            <li><a>Blog</a></li>

          </ul>
        </details>
      </li>
      <li><a>Careers</a></li>
      <li><a>About</a></li>

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl">Snap</a>
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     

      <li tabIndex={0}>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li><a><img src={todo} />Todo list</a></li>
            <li><a><img src={calendar} />Calender</a></li>
            <li><a><img src={reminders} />Reminders</a></li>
            <li><a><img src={planning} />Planing</a></li>

          </ul>
        </details>
      </li>
      <li tabIndex={1} className="ml-8">
        <details>
          <summary>Company</summary>
          <ul className="p-2">
            <li><a>History</a></li>
            <li><a>Our Team </a></li>
            <li><a>Blog</a></li>

          </ul>
        </details>
      </li>
      <li><a>Careers</a></li>
      <li><a>About</a></li>

    </ul>
  </div>
  <div className="navbar-end">
  <button className="bg-white mr-7 font-semibold">Login</button>
    <button className="btn btn-outline rounded">Register</button>


  </div>
</div>



  )
}

export default Navbar