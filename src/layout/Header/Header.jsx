import Button from "../../components/Button/Button";
import "./Header.scss";
import { Slide } from "react-awesome-reveal";

const Header = () => {
  const NavLinks = [
    { title: "Skills", link: "#Skills" },
    { title: "Experience", link: "#Experience" },
    { title: "Projects", link: "#Projects" },
    { title: "Contacts", link: "#Contacts" },
  ];

  return (
    <header className="header">
      <Slide fraction={0.5} duration={1000} direction="down" triggerOnce>
        <div className="container">
          <div className="header__content">
            <h2 className="header__content_logo glass-effect">.Erbol</h2>
            <ul className="header__content_navbar glass-effect">
              {NavLinks.map((link) => (
                <li>{link.title}</li>
              ))}
            </ul>
            <Button
              type="secondary"
              cls={"header__content_button"}
              text={"Connect with me"}
            />
          </div>
        </div>
      </Slide>
    </header>
  );
};
export default Header;
