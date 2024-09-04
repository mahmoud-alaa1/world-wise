import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <na>
      <ul>
        <li>
          <NavLink to={"/"}>Home Page</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>product</NavLink>
        </li>
      </ul>
    </na>
  );
}

export default PageNav
