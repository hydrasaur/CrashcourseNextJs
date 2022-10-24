import styles from "../styles/layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
