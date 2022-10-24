import Link from "next/link";
import Something from "../pages/something";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/" style={{ color: "white" }}>
            home
          </Link>
        </li>
        <li>
          <Link href="/something">Something</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
