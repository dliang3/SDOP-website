import "./Home.css"
import "../../components/buttons.css"
import appHomepage from "../../images/demoScreenshot1.png"
import appObjectPage from "../../images/demoScreenshot2.png"

const Home = () => {

  const handleOnClick = () => {
    window.location.href = '/Download';
  }

  return (
    <div className="home">
      <h1 className="title">Silly <br></br> Data <br></br> Object <br></br> Packager</h1>
      <div className="stickyNote"> slayifying your development process... </div>
      <div className="body">
        <div className="imageContainer">
          <img src={appHomepage} alt="application homepage"></img>
          <img src={appObjectPage} alt="application object page"></img>
        </div>
        <button className="mainButton" onClick={handleOnClick}>Download Here</button>
      </div>

    </div>
  );
}

export default Home;