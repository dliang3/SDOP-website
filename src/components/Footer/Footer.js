import "./Footer.css"
import wwlogo from "../../images/WorldWeavers-logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoContainer">
        <img src={wwlogo} alt="world weavers logo"></img>
      </div>
      <h1 className="footerText">World Weavers</h1>
      <div class="text-with-dot"></div>
      <h3 className="footerText">sddworldweavers@gmail.com</h3>
    </div>
  );
}

export default Footer;