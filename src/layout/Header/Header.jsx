import Button from "../../components/Button/Button";
import "./Header.scss";

const Header = () => {
  const NavLinks = [
    { title: "Skills", link: "#Skills" },
    { title: "Experience", link: "#Experience" },
    { title: "Projects", link: "#Projects" },
    { title: "Contacts", link: "#Contacts" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h2 className="header__content_logo">.Erbol</h2>
          <ul className="header__content_navbar">
            {NavLinks.map((link) => ( 
              <li>{link.title}</li>
            ))}
          </ul>
          <Button type='secondary' cls={"header__content_button"} text={"Connect with me"} />
        </div>
      </div>
    </header>
  );
};
export default Header;
