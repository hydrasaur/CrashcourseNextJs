import headerstyles from "../styles/Header.module.css";

const Header = ({ title, description }) => {
  return (
    <div>
      <h1 className={headerstyles.title}>
        <span>{title}</span>
      </h1>
      <p className={headerstyles.description}>
        <span>{description}</span>
      </p>
    </div>
  );
};

export default Header;
